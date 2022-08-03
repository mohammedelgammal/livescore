import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsApiHeaders = {
    "X-BingApis-SDK": "true",
    "X-RapidAPI-Key": "2d7a088439msh81e468e0e68e6d1p184254jsnf2828f8e5ac2",
    "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
  },
  baseUrl = "https://bing-news-search1.p.rapidapi.com",
  createRequest = (url) => ({ url, headers: cryptoNewsApiHeaders }),
  cryptoNewsApi = createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({
      baseUrl,
    }),
    endpoints: (builder) => ({
      getCryptoNews: builder.query({
        query: ({ count, newsCategory }) =>
          createRequest(
            `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
          ),
      }),
    }),
  });

export default cryptoNewsApi;
export const { useGetCryptoNewsQuery } = cryptoNewsApi;
