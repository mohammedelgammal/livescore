import { Container, Button, Center } from "@chakra-ui/react";
import DatePicker from "sassy-datepicker";
import "react-dater/dist/index.css";

const Calendar = () => {
  return (
    <Container p={0}>
      <DatePicker />
      <Center>
        <Button mt={1} w={"100%"} variant={"solid"}>
          Today
        </Button>
      </Center>
    </Container>
  );
};

export default Calendar;
