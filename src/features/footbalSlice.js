import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLive: false,
  matchesDate: new Date(),
  sportsUrl: "",
  filteredLeagues: [],
  filterErrMsg: "",
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
    setFilteredLeagues: (state, action) => {
      state.filteredCountries = action.payload;
    },
    setFilterErrMsg: (state, action) => {
      state.filterErrMsg = action.payload;
    },
  },
});

export const {
  getLiveMatches,
  setMatchesDate,
  setSportUrl,
  setFilteredLeagues,
  setFilterErrMsg,
} = footballSlice.actions;
export default footballSlice.reducer;
