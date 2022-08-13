import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLive: false,
  matchesDate: new Date(),
};

const footballSlice = createSlice({
  name: "football",
  initialState,
  reducers: {
    getLiveMatches: (state, action) => {
      state.isLive = action.payload;
    },
    setMatchesDate: (state, action) => {
      state.matchesDate = action.payload;
    },
    setSportUrl: (state, action) => {
      state.sportUrl = action.payload;
    },
  },
});

export const { getLiveMatches, setMatchesDate, setSportUrl } =
  footballSlice.actions;
export default footballSlice.reducer;
