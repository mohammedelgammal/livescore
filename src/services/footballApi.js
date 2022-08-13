import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://v3.football.api-sports.io";
const composeRequest = (url) => ({
  url,
  headers: {
    "x-rapidapi-host": "v3.football.api-sports.io",
    "x-rapidapi-key": process.env.REACT_APP_FOOTBALL_API_KEY,
  },
});

export const footballApi = createApi({
  reducerPath: "footballApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => composeRequest("/countries"),
    }),
    getGames: builder.query({
      query: (url) => composeRequest(`/fixtures${url}`),
    }),
    getTopPlayers: builder.query({
      query: () => composeRequest("/players/topscorers?league=39&season=2022"),
    }),
  }),
});

export const { useGetCountriesQuery, useGetGamesQuery, useGetTopPlayersQuery } =
  footballApi;
