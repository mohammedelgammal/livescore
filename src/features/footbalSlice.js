import { createSlice } from "@reduxjs/toolkit";

const initialState = { countries: [] };

const footballSlice = createSlice({
  name: "football",
  initialState,
  reducers: {
    filterCountries: (state, action) => console.log(state, action.payload),
  },
});

export const { filterCountries } = footballSlice.actions;
export default footballSlice.reducer;
