import {
  Center,
  GridItem,
  Grid,
  List,
  ListItem,
  Icon,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { FiBellOff } from "react-icons/fi";
import Moment from "moment";

const Match = ({ data, timestamp, status }) => {
  return (
    <>
      {data.map((fixture) => (
        <Grid
          key={Math.random()}
          templateAreas={`"time teams bell"`}
          gridTemplateColumns={"50px 1fr 50px"}
        >
          <GridItem
            pl="2"
            borderRight={"1px"}
            borderColor="gray.200"
            area={"time"}
          >
            <Center height={"100%"}>
              <List spacing={1}>
                <ListItem color={"gray"}>{Moment(timestamp)}</ListItem>
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
            <Center height={"100%"}>
              <List spacing={1}>
                <ListItem>
                  <Center>
                    <Avatar
                      w={"30px"}
                      h={"30px"}
                      name={fixture.teams.home.name}
                      src={fixture.teams.home.logo}
                      bg="transparent"
                    />
                  </Center>
                  {fixture.teams.home.name}
                </ListItem>
                <ListItem>
                  <Center>
                    <Avatar
                      w={"30px"}
                      h={"30px"}
                      name={fixture.teams.away.id}
                      src={fixture.teams.away.logo}
                      bg="transparent"
                    />
                  </Center>
                  {fixture.teams.away.name}
                </ListItem>
              </List>
            </Center>
          </GridItem>
          <GridItem pl="2" area={"bell"}>
            <Center height={"100%"}>
              <Button variant={"ghost"}>
                <Icon as={FiBellOff} />
              </Button>
            </Center>
          </GridItem>
        </Grid>
      ))}
    </>
  );
};

export default Match;
