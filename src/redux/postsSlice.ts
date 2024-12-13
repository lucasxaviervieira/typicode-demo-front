import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api"

export interface Post {
    id: number;
    title: string;
}

interface PostsState {
    posts: Post[];
    loading: boolean;
    error: string | null
}
const initialState: PostsState = {
    posts: [],
    loading: false,
    error: null
}

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const response = await api.get("/posts")
    return response.data
})

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = true;
                state.error = action.error.message || "Failed to fetch posts";
            })
})

export default postsSlice.reducer;