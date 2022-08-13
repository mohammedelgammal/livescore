import {
  Stack,
  Switch,
  Grid,
  GridItem,
  Divider,
  Tag,
  Box,
  Spacer,
  Flex,
  SkeletonCircle,
  SkeletonText,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import League from "./League";
import { useGetGamesQuery } from "../services/footballApi";
import Match from "../components/Match";
import { useDispatch, useSelector } from "react-redux";
import { getLiveMatches } from "../features/footbalSlice";

const GamesBar = () => {
  console.log(useSelector((state) => state.football.sportUrl));
  const date = useSelector(
    (state) => state.football.matchesDate.toISOString().split("T")[0]
  );
  const isLive = useSelector((state) => state.football.isLive);
  const { data, isFetching, error } = useGetGamesQuery(
    isLive ? "?live=all" : `?date=${date}`
  );
  const groupedData = data?.response?.reduce((groups, curr) => {
    groups[curr?.league?.name] = groups[curr?.league?.name] || [];
    groups[curr?.league?.name].push(curr);
    return groups;
  }, {});
  const groupedDataKeys = groupedData && Object.values(groupedData);
  const dispatch = useDispatch();
  const switchHandler = (e) => {
    dispatch(getLiveMatches(e.target.checked));
  };

  return (
    <>
      {isFetching ? (
        <>
          <Box mt={4}>
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>
          <Box mt={4}>
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>
          <Box mt={4}>
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>
          <Box mt={4}>
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>
        </>
      ) : data ? (
        <Grid>
          <GridItem>
            <Flex>
              <Box>
                <Stack direction={"row"}>
                  <Switch
                    id="switch-live"
                    colorScheme={"red"}
                    size="md"
                    mt={0.5}
                    onChange={(e) => switchHandler(e)}
                    isDisabled={isFetching}
                    isChecked={isLive}
                  />
                  {isLive ? (
                    <Tag
                      borderRadius="full"
                      colorScheme={"red"}
                      variant="outline"
                      px={3}
                    >
                      ● live ({data?.response.length})
                    </Tag>
                  ) : (
                    <Tag
                      borderRadius="full"
                      colorScheme={"blue"}
                      variant="outline"
                      px={3}
                    >
                      All ({data?.response.length})
                    </Tag>
                  )}
                </Stack>
              </Box>
              <Spacer />
              <Box>
                <Box direction={"row"}>
                  <Tag
                    borderRadius="full"
                    colorScheme={"blue"}
                    variant="outline"
                    px={3}
                  >
                    show odds
                  </Tag>
                  <Switch id="switch-live" size="md" ml={2} mb={0.5} />
                </Box>
              </Box>
            </Flex>
          </GridItem>
          <Divider mt={3} orientation="horizontal" />
          <GridItem>
            {groupedDataKeys?.map((league) => (
              <Stack direction={"column"} key={league[0]?.league?.name}>
                <League
                  src={league[0]?.league?.flag}
                  country={league[0]?.league?.country}
                  league={league[0]?.league?.name}
                />
                {league.map((match) => (
                  <Stack direction={"column"} key={match?.fixture?.id}>
                    <Match
                      timestamp={match?.fixture?.status?.elapsed}
                      status={match?.fixture?.status?.short}
                      home={match?.teams?.home}
                      away={match?.teams?.away}
                      goals={match?.goals}
                    />
                    <Divider />
                  </Stack>
                ))}
              </Stack>
            ))}
          </GridItem>
        </Grid>
      ) : error ? (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Error fetching data!</AlertTitle>
          <AlertDescription>Check your internet connection.</AlertDescription>
        </Alert>
      ) : null}
    </>
  );
};

export default GamesBar;
