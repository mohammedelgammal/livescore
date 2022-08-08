import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://v1.basketball.api-sports.io";
const headers = {
  "x-rapidapi-host": "v3.football.api-sports.io",
  "x-rapidapi-key": process.env.REACT_APP_FOOTBALL_API_KEY,
};

export const footballApi = createApi({
  reducerPath: "sportsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => ({
        url: "/countries",
        headers: headers,
      }),
    }),
  }),
});

export const { useGetCountriesQuery } = footballApi;
