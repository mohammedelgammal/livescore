import List from "../components/List";
import { useGetCountriesQuery } from "../services/sportsApi";
import { useState } from "react";

const AllLeagues = () => {
  const {
    data: leagues,
    isSuccess,
    isFetching,
    error,
  } = useGetCountriesQuery();

  return (
    <>
      <List
        title="ALL LEAGUES"
        data={leagues?.response}
        apiType="sports"
        isFetching={isFetching}
        error={error}
        hasFilter
      />
    </>
  );
};

export default AllLeagues;
