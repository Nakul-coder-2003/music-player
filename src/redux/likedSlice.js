import { createSlice } from "@reduxjs/toolkit";

const likedSlice = createSlice({
  name: "likedlist",
  initialState: {
    songs: [],
  },
  reducers: {
    AddLikedSong: (state, action) => {
      let exit = state.songs.find(
        (item) => item.songIndex === action.payload.songIndex
      );
      if (exit) {
        return;
      } else {
        state.songs.push(action.payload);
      }
    },
    RemoveLikedSong: (state, action) => {
      return {
        ...state,
        songs: state.songs.filter((item) => item.songIndex !== action.payload),
      };
    },
  },
});

export const {AddLikedSong, RemoveLikedSong} = likedSlice.actions;
export default likedSlice.reducer
