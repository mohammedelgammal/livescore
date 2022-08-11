import FeaturedMatch from "../components/FeaturedMatch";
import { useGetGamesQuery } from "../services/sportsApi";
import _ from "lodash";
import { Stack } from "@chakra-ui/react";

const FeaturedBar = () => {
  const {
    data: liveMatches,
    isSuccess,
    isFetching,
    error,
  } = useGetGamesQuery("?live=all");
  const matches = liveMatches?.response;
  const getFeaturedMatch = (length) => matches?.[_.random(0, length)];
  const featuredMatch = getFeaturedMatch(matches?.length);

  return (
    <Stack direction={"column"} spacing={4}>
      <FeaturedMatch
        match={isSuccess && featuredMatch}
        isFetching={isFetching}
        error={error}
      />
    </Stack>
  );
};

export default FeaturedBar;
