import List from "../components/List";
import { Container } from "@chakra-ui/react";
import { rankings } from "../data/local";

const Rankings = () => {
  return (
    <Container title="rankings" p={0}>
      <List title="RANKINGS" data={rankings} apiType="rapid" />
    </Container>
  );
};

export default Rankings;
