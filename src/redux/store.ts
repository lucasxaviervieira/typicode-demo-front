import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice"
import profileReducer from "./profileSlice"

const store = configureStore({
    reducer: {
        posts: postsReducer,
        profile: profileReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store