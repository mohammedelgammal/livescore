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
  Spacer,
  Divider,
  Box,
  SkeletonCircle,
  SkeletonText,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const FeaturedMatch = ({ match, isFetching, error }) => {
  return (
    <Container p={0} pb={20}>
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
      ) : match ? (
        <Grid
          templateAreas={`"home date away"
                        "info info info"`}
          templateColumns={"repeat(3, 1fr)"}
          templateRows={"repeat(2, 1fr)"}
        >
          <GridItem area={"home"}>
            <Flex w={"100%"} justifyContent={"start"}>
              <Stack spacing={4} direction={"column"}>
                <Center>
                  <Avatar
                    w={"50px"}
                    h={"50px"}
                    name={match?.teams?.home?.name}
                    src={match?.teams?.home?.logo}
                    bg="transparent"
                  />
                </Center>
                <Center>
                  <Text fontWeight={"bold"}>{match?.teams?.home?.name}</Text>
                </Center>
              </Stack>
            </Flex>
          </GridItem>
          <GridItem area={"date"}>
            <Center h={"100%"}>
              <Stack direction={"column"} fontWeight="bold">
                <Center>
                  <Text>
                    {match?.fixture?.status?.elapsed}m -
                    {match?.fixture?.status?.short}
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
                    name={match?.teams?.away?.name}
                    src={match?.teams?.away?.logo}
                    bg="transparent"
                  />
                </Center>
                <Center>
                  <Text fontWeight={"bold"}>{match?.teams?.away?.name}</Text>
                </Center>
              </Stack>
            </Flex>
          </GridItem>
          <GridItem area={"info"}>
            <Stack fontWeight={"bold"} direction={"column"}>
              <Flex justifyContent={"space-between"} fontSize={40}>
                <Flex justifyContent={"center"}>
                  <Text p={0}>{match?.goals?.home}</Text>
                </Flex>
                <Flex justifyContent={"center"} mx={6}>
                  <Text p={0}>-</Text>
                </Flex>
                <Flex justifyContent={"center"}>
                  <Text p={0}>{match?.goals?.away}</Text>
                </Flex>
              </Flex>
            </Stack>
          </GridItem>
        </Grid>
      ) : null}
    </Container>
  );
};

export default FeaturedMatch;
