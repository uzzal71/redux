import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../features/videos/videosSlice";
import tagsReducer from "../features/tags/tagsSlice";

export const store = configureStore({
    reducer: {
        videos: videosReducer,
        tags: tagsReducer
    },
});