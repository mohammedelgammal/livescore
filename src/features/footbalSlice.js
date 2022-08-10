import { createSlice } from "@reduxjs/toolkit";

const initialState = { countries: [] };

const footballSlice = createSlice({
  name: "football",
  initialState,
  reducers: {
    getLiveMatches: (state, action) => {
      state.isLive = action.payload;
    },
  },
});

export const { getLiveMatches } = footballSlice.actions;
export default footballSlice.reducer;
