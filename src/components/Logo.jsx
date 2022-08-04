import { Link } from "react-router-dom";
import { Container, Image, HStack, Text } from "@chakra-ui/react";
import logo from "../dist/imgs/football.png";

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <HStack>
          <Image src={logo} boxSize="20px" objectFit="cover" alt="Livescore" />
          <Text fontSize="2xl">Livescore</Text>
        </HStack>
      </Link>
    </Container>
  );
};

export default Logo;
