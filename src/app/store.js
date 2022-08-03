import { configureStore } from "@reduxjs/toolkit";
import cryptoApi from "./../services/cryptoApi";
import cryptoNewsApi from "./../services/cryptoNewsApi";

const { reducer: cryptoReducer, reducerPath: cryptoReducerPath } = cryptoApi;
const { reducer: newsReducer, reducerPath: newsReducerPath } = cryptoNewsApi;

export default configureStore({
  reducer: {
    [cryptoReducerPath]: cryptoReducer,
    [newsReducerPath]: newsReducer,
  },
});
 