import { Container, Grid, GridItem, VStack, Divider } from "@chakra-ui/react";
import Calendar from "../components/Calendar";
import TopLeagues from "../components/TopLeagues";
import Rankings from "./../components/Rankings";
import AllLeagues from "./../components/AllLeagues";
import GamesBar from "./gamesBar";

const Main = () => {
  return (
    <Container mt={"10px"} p={0} className="main-container" maxW="1280px">
      <Grid
        templateAreas={`"left center right"`}
        gridTemplateRows="1fr"
        gridTemplateColumns="1fr 3fr 4fr"
        gap="2"
        w={"100%"}
      >
        <GridItem area={"left"}>
          <VStack spacing={10}>
            <Calendar />
            <TopLeagues />
            <Rankings />
            <AllLeagues />
          </VStack>
        </GridItem>
        <Divider />
        <GridItem area={"center"}>
          <GamesBar />
        </GridItem>
        <GridItem area={"right"}>this</GridItem>
      </Grid>
    </Container>
  );
};

export default Main;
