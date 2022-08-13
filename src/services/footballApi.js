import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const dynamicBaseQuery = async (args, webApi, extraOptions) => {
  const sportUrl = webApi.getState().football.sportUrl;
  const baseUrl = `https://${sportUrl}.api-sports.iosss`;
  const rawBaseQuery = fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set("x-rapidapi-host", `${sportUrl}.api-sports.iosss`);
      headers.set("x-rapidapi-key", process.env.REACT_APP_FOOTBALL_API_KEY);
      return headers;
    },
  });
  return rawBaseQuery(args, webApi, extraOptions);
};

export const footballApi = createApi({
  reducerPath: "footballApi",
  baseQuery: dynamicBaseQuery,
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => ({
        url: "/countries",
      }),
    }),
    getGames: builder.query({
      query: (url) => ({
        url: `/fixtures${url}`,
      }),
    }),
    getTopPlayers: builder.query({
      query: () => ({
        url: "/players/topscorers?league=39&season=2022",
      }),
    }),
  }),
});

export const { useGetCountriesQuery, useGetGamesQuery, useGetTopPlayersQuery } =
  footballApi;
