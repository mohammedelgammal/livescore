import {
  Container,
  Heading,
  Center,
  Stack,
  StackDivider,
  Link,
  Avatar,
  Text,
  Skeleton,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const List = ({ title, data, apiType, isFetching, error, hasFilter }) => {
  const vars =
    apiType === "rapid" ? ["title", "url", "icon"] : ["name", "code", "flag"];

  return (
    <Container p={0}>
      {!hasFilter && (
        <Center>
          <Heading as={"h3"} size="sm">
            {title}
          </Heading>
        </Center>
      )}
      <Container p={0}>
        <Stack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={2}
          mt={!hasFilter && "25px"}
          mb={"50px"}
          align="stretch"
          direction={"column"}
        >
          {isFetching ? (
            <Stack>
              <Skeleton height={7}></Skeleton>
              <Skeleton height={7}></Skeleton>
              <Skeleton height={7}></Skeleton>
              <Skeleton height={7}></Skeleton>
              <Skeleton height={7}></Skeleton>
            </Stack>
          ) : data ? (
            data?.map((item) => (
              <Link key={Math.random()} to="/">
                <Stack direction={"row"}>
                  <Avatar
                    w={"20px"}
                    h={"20px"}
                    name={item[vars[1]]}
                    src={item[vars[2]]}
                    bg="transparent"
                  />
                  <Center>
                    <Text>{item[vars[0]]}</Text>
                  </Center>
                </Stack>
              </Link>
            ))
          ) : error ? (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>Error fetching data!</AlertTitle>
              <AlertDescription>
                Check your internet connection.
              </AlertDescription>
            </Alert>
          ) : null}
        </Stack>
      </Container>
    </Container>
  );
};

export default List;
