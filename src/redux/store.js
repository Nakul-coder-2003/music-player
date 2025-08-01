import { configureStore } from "@reduxjs/toolkit";
import playlistSlice from "./playlistSlice"
import likedSlice from "./likedSlice"

export const store = configureStore({
    reducer:{
       playlist : playlistSlice,
       likedlist: likedSlice
    }
})