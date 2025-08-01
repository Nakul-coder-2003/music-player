import { createSlice } from "@reduxjs/toolkit";

const playlistSlice = createSlice({
  name: "playlist",
  initialState: {
    songs: [],
  },
  reducers: {
    AddSong: (state, action) => {
      let exit = state.songs.find(
        (item) => item.songIndex === action.payload.songIndex
      );
      if (exit) {
        return;
      } else {
        state.songs.push(action.payload);
      }
    },
    RemoveSong: (state, action) => {
      return {
        ...state,
        songs: state.songs.filter((item) => item.songIndex !== action.payload),
      };
    },
  },
});

export const { AddSong, RemoveSong } = playlistSlice.actions;
export default playlistSlice.reducer;
