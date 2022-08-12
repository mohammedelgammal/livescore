import {
  Container,
  Heading,
  Grid,
  GridItem,
  Stack,
  Avatar,
  Text,
  Center,
  Flex,
  Box,
  SkeletonCircle,
  SkeletonText,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Divider,
} from "@chakra-ui/react";
import { useGetGamesQuery } from "../services/footballApi";
import _ from "lodash";

const FeaturedMatch = () => {
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
    <Container p={0}>
      <Heading as="h3" size="l" mb={5}>
        FEATURED MATCH
      </Heading>
      {isFetching ? (
        <Box mt={4}>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
      ) : error ? (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Error fetching data!</AlertTitle>
          <AlertDescription>Check your internet connection.</AlertDescription>
        </Alert>
      ) : featuredMatch ? (
        <Grid
          templateAreas={`"home date away"
                        "info info info"
                        "odds odds odds"`}
          templateColumns={"repeat(3, 1fr)"}
        >
          <GridItem area={"home"}>
            <Flex w={"100%"} justifyContent={"start"}>
              <Stack spacing={4} direction={"column"}>
                <Center>
                  <Avatar
                    w={"50px"}
                    h={"50px"}
                    name={featuredMatch?.teams?.home?.name}
                    src={featuredMatch?.teams?.home?.logo}
                    bg="transparent"
                  />
                </Center>
                <Center>
                  <Text fontWeight={"bold"} textAlign={"center"}>
                    {featuredMatch?.teams?.home?.name}
                  </Text>
                </Center>
              </Stack>
            </Flex>
          </GridItem>
          <GridItem area={"date"}>
            <Center h={"100%"}>
              <Stack direction={"column"} fontWeight="bold">
                <Center>
                  <Text>
                    {featuredMatch?.fixture?.status?.elapsed}m -
                    {featuredMatch?.fixture?.status?.short}
                  </Text>
                </Center>
                <Center>
                  <Text fontSize={12}>Today</Text>
                </Center>
              </Stack>
            </Center>
          </GridItem>
          <GridItem area={"away"}>
            <Flex justifyContent={"end"} w={"100%"}>
              <Stack spacing={4} direction={"column"}>
                <Center>
                  <Avatar
                    w={"50px"}
                    h={"50px"}
                    name={featuredMatch?.teams?.away?.name}
                    src={featuredMatch?.teams?.away?.logo}
                    bg="transparent"
                  />
                </Center>
                <Center>
                  <Text fontWeight={"bold"} textAlign="center">
                    {featuredMatch?.teams?.away?.name}
                  </Text>
                </Center>
              </Stack>
            </Flex>
          </GridItem>
          <GridItem area={"info"}>
            <Flex justifyContent={"center"} w={"100%"} fontSize={40}>
              <Flex justifyContent={"center"}>
                <Text p={0}>{featuredMatch?.goals?.home}</Text>
              </Flex>
              <Flex justifyContent={"center"} mx={6}>
                <Text p={0}>-</Text>
              </Flex>
              <Flex justifyContent={"center"}>
                <Text p={0}>{featuredMatch?.goals?.away}</Text>
              </Flex>
            </Flex>
          </GridItem>
        </Grid>
      ) : null}
      <Divider my={4} />
    </Container>
  );
};

export default FeaturedMatch;
