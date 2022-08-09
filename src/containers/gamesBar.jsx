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
} from "@chakra-ui/react";
import League from "./League";
import { useGetGamesQuery } from "../services/sportsApi";

const GamesBar = ({ count }) => {
  const { data } = useGetGamesQuery("2022-08-09");
  const groupedData = data?.response?.reduce((groups, curr) => {
    groups[curr?.league?.country] = groups[curr?.league?.country] || [];
    groups[curr?.league?.country].push(curr);
    return groups;
  }, {});
  const groupedDataKeys = groupedData && Object.values(groupedData);
  console.log(groupedDataKeys);
  return (
    <>
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
                />
                <Tag
                  borderRadius="full"
                  colorScheme={"red"}
                  variant="outline"
                  px={3}
                >
                  ● live
                </Tag>
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
          {groupedDataKeys?.map((fixture) => (
            <League
              key={Math.random()}
              src={fixture[0]?.league?.flag}
              country={fixture[0]?.league?.country}
              league={fixture[0]?.league?.name}
              data={groupedDataKeys}
            />
          ))}
        </GridItem>
      </Grid>
    </>
  );
};

export default GamesBar;
