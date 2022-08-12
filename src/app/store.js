import { configureStore } from "@reduxjs/toolkit";
import { footballApi } from "../services/footballApi";
import footballReducer from "../features/footbalSlice";

const store = configureStore({
  reducer: {
    [footballApi.reducerPath]: footballApi.reducer,
    football: footballReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(footballApi.middleware),
});

export default store;
