import { Container, Grid, GridItem, VStack, Divider } from "@chakra-ui/react";
import Calendar from "../components/Calendar";
import TopLeagues from "../components/TopLeagues";
import Rankings from "./../components/Rankings";
import AllLeagues from "./../components/AllLeagues";
import FeaturedBar from "./FeaturedBar";
import GamesBar from "./gamesBar";
import { useDispatch } from "react-redux";
import { setSportUrl } from "../features/footbalSlice";
import { useEffect } from "react";

const Main = ({ sport }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSportUrl(sport));
  }, [dispatch, sport]);

  return (
    <Container mt={"10px"} p={0} className="main-container" maxW="1280px">
      <Grid
        templateAreas={`"left divider1 center divider2 right"`}
        gridTemplateRows="1fr"
        gridTemplateColumns="1fr 2px 3fr 2px 4fr"
        gap={4}
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
        <Divider area={"divider1"} orientation="vertical" />
        <GridItem area={"center"}>
          <GamesBar />
        </GridItem>
        <Divider area={"divider2"} orientation="vertical" />
        <GridItem area={"right"}>
          <FeaturedBar />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Main;
