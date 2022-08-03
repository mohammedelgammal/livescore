import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    "X-RapidAPI-Key": "2d7a088439msh81e468e0e68e6d1p184254jsnf2828f8e5ac2",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
  baseUrl = "https://coinranking1.p.rapidapi.com",
  cryptoApi = createApi({
    reducerPath: "cryptoApi",
    baseQuery: fetchBaseQuery({
      baseUrl,
    }),
    endpoints: (builder) => ({
      getCryptos: builder.query({
        query: (count) => createRequest(`/coins?limit=${count}`),
      }),
      getCryptoDetails: builder.query({
        query: (uuid) => createRequest(`/coin/${uuid}`),
      }),
      getCryptoHistory: builder.query({
        query: ({ coinUuid, timePeriod }) =>
          createRequest(`/coin/${coinUuid}/history/${timePeriod}`),
      }),
    }),
  }),
  createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export default cryptoApi;
export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
