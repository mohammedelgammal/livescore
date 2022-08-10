import { Stack, Avatar, Center, Text, Divider } from "@chakra-ui/react";

const League = ({ src, league, country }) => {
  return (
    <>
      <Stack spacing={4}>
        <Stack direction={"row"} mt={4}>
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
        <Divider orientation="horizontal" />
      </Stack>
    </>
  );
};

export default League;
