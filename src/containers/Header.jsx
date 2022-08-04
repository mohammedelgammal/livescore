import { Container, Grid, GridItem, HStack, Box } from "@chakra-ui/react";
import Navbar from "./../components/Navbar";
import Searchbar from "./../components/Searchbar";
import Logo from "./../components/Logo";

const Header = () => {
  return (
    <Container className="header-container" maxW={"1280px"} bg={"blue.700"}>
      <Grid
        templateAreas={`"logo search nav"`}
        gridTemplateRows={"1fr"}
        gridTemplateColumns={"180px 3fr 1fr"}
        gap="5"
      >
        <GridItem area={"logo"}>
          <Logo />
        </GridItem>
        <GridItem area={"search"}>
          <Searchbar />
        </GridItem>
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Header;
