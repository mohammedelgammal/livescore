import { createSlice } from "@reduxjs/toolkit";

const initialState = { countries: [] };

const footballSlice = createSlice({
  name: "football",
  initialState,
  reducers: {
    groupByCountry: (state, action) => {
    },
  },
});

export const { groupByCountry } = footballSlice.actions;
export default footballSlice.reducer;
