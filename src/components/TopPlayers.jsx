import { useGetTopPlayersQuery } from "../services/footballApi";
import {
  Container,
  Heading,
  Grid,
  GridItem,
  Avatar,
  Text,
  Stack,
  Divider,
  Skeleton,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Center,
} from "@chakra-ui/react";

const TopPlayers = () => {
  const { data: topPlayers, isFetching, error } = useGetTopPlayersQuery();

  return (
    <Container p={0}>
      <Heading as="h3" size="l" mb={5}>
        TOP PLAYERS
      </Heading>
      <Stack direction={"column"} spacing={4}>
        {isFetching ? (
          <Stack spacing={3}>
            {topPlayers?.response?.slice(0, 10)?.map((record) => (
              <Skeleton key={record?.player?.id} height={"60px"} />
            ))}
          </Stack>
        ) : topPlayers ? (
          topPlayers?.response?.map((record, index) => (
            <Grid
              key={record?.player?.id}
              templateColumns={"20px 50px 1fr 50px"}
              gap={3}
            >
              <GridItem>
                <Center h={"100%"}>
                  <Text fontSize={14} fontWeight={"bold"}>
                    {index + 1}
                  </Text>
                </Center>
              </GridItem>
              <GridItem>
                <Avatar
                  size="md"
                  name={record?.player?.name}
                  src={record?.player?.photo}
                />
              </GridItem>
              <GridItem>
                <Text fontSize={18} fontWeight={"bold"}>
                  {record?.player?.name}
                </Text>
                <Text fontSize={"sm"} color={"gray.400"}>
                  {record?.statistics?.[0]?.team?.name} -
                  {record?.statistics?.[0]?.league?.name}
                </Text>
              </GridItem>
              <GridItem>
                <Avatar
                  size="md"
                  name={record?.statistics?.[0]?.team?.name}
                  src={record?.statistics?.[0]?.team?.logo}
                />
              </GridItem>
            </Grid>
          ))
        ) : error ? (
          <Alert status="error">
            <AlertIcon />
            <AlertTitle>Error fetching data!</AlertTitle>
            <AlertDescription>Check your internet connection.</AlertDescription>
          </Alert>
        ) : null}
        <Divider />
      </Stack>
    </Container>
  );
};

export default TopPlayers;
