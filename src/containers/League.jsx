import { Stack, Avatar, Center, Text, Divider } from "@chakra-ui/react";
import Match from "../components/Match";

const League = ({ src, league, country, data }) => {
  return (
    <>
      <Stack>
        <Stack direction={"row"} my={2}>
          <Center>
            <Avatar
              w={"30px"}
              h={"30px"}
              name={league}
              src={src}
              bg="transparent"
            />
          </Center>
          <Stack direction={"column"} spacing={-1}>
            <Text p={0} fontSize={"xs"} color={"gray"} fontWeight={"bold"}>
              {country}
            </Text>
            <Text p={0} fontWeight={"bold"}>
              {league}
            </Text>
          </Stack>
        </Stack>
        <Divider my={2} orientation="horizontal" />
        <Match data={data} />
        <Divider my={2} orientation="horizontal" />
      </Stack>
    </>
  );
};

export default League;
