import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/api";

interface Profile {
    name: string
}

interface ProfileState {
    profile: Profile | null;
    loading: boolean
}

const initialState: ProfileState = {
    profile: null,
    loading: false
}

export const fetchProfile = createAsyncThunk("profile/fetchProfile", async () => {
    const response = await api.get("/profile")
    return response.data
})

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProfile.fulfilled, (state, action) => {
            state.profile = action.payload
        })
    }
})

export default profileSlice.reducer