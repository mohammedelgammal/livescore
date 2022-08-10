import {
  Center,
  GridItem,
  Grid,
  List,
  ListItem,
  Icon,
  Button,
  Avatar,
  Text,
  Stack,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { FiBellOff } from "react-icons/fi";
import Moment from "moment";

const Match = ({ timestamp, status, home, away, goals }) => {
  const matchTime = Moment(timestamp).format("h:mm");

  return (
    <Grid
      templateAreas={`"time teams bell"`}
      gridTemplateColumns={"50px 1fr 50px"}
      fontSize={14}
    >
      <GridItem pl="2" borderRight={"1px"} borderColor="gray.200" area={"time"}>
        <Center height={"100%"}>
          <List spacing={1}>
            <ListItem color={"gray"}>{matchTime}</ListItem>
            <ListItem color={"gray"}>{status}</ListItem>
          </List>
        </Center>
      </GridItem>
      <GridItem
        pl="2"
        area={"teams"}
        borderRight={"1px"}
        borderColor="gray.200"
      >
        <Flex pr={3}>
          <List spacing={1}>
            <ListItem color={home?.winner ? "green" : "red"}>
              <Stack direction={"row"}>
                <Avatar
                  w={"20px"}
                  h={"20px"}
                  name={home?.name}
                  src={home?.logo}
                  bg="transparent"
                />
                <Text>{home?.name}</Text>
              </Stack>
            </ListItem>
            <ListItem color={away?.winner ? "green" : "red"}>
              <Stack direction="row">
                <Avatar
                  w={"20px"}
                  h={"20px"}
                  name={away?.name}
                  src={away?.logo}
                  bg="transparent"
                />
                <Text>{away?.name}</Text>
              </Stack>
            </ListItem>
          </List>
          <Spacer />
          <List spacing={2}>
            <ListItem color={home?.winner ? "green" : "red"}>
              <Text>{goals?.home}</Text>
            </ListItem>
            <ListItem color={away?.winner ? "green" : "red"}>
              <Text>{goals?.away}</Text>
            </ListItem>
          </List>
        </Flex>
      </GridItem>
      <GridItem pl="2" area={"bell"}>
        <Center height={"100%"}>
          <Button variant={"ghost"}>
            <Icon as={FiBellOff} />
          </Button>
        </Center>
      </GridItem>
    </Grid>
  );
};

export default Match;
