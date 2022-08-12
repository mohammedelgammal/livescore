import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://v3.football.api-sports.io";
const headers = {
  "x-rapidapi-host": "v3.football.api-sports.io",
  "x-rapidapi-key": process.env.REACT_APP_FOOTBALL_API_KEY,
};

export const footballApi = createApi({
  reducerPath: "footballApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => ({
        url: "/countries",
        headers: headers,
      }),
    }),
    getGames: builder.query({
      query: (url) => ({
        url: `/fixtures${url}`,
        headers: headers,
      }),
    }),
    getTopPlayers: builder.query({
      query: (url) => ({
        url: `/players/topscorers?league=39&season=2022`,
        headers: headers,
      }),
    }),
  }),
});

export const { useGetCountriesQuery, useGetGamesQuery, useGetTopPlayersQuery } =
  footballApi;
