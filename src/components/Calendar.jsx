import { Container, Button, Center } from "@chakra-ui/react";
import DatePicker from "sassy-datepicker";
import "react-dater/dist/index.css";
import { useDispatch, useSelector } from "react-redux";
import { setMatchesDate } from "../features/footbalSlice";

const Calendar = () => {
  const dispacth = useDispatch();
  const dateChangeHandler = (newDate) => dispacth(setMatchesDate(newDate));

  return (
    <Container p={0}>
      <DatePicker
        onChange={dateChangeHandler}
        selected={useSelector((state) => state.football.matchesDate)}
      />
      <Center>
        <Button mt={1} w={"100%"} variant={"solid"}>
          Today
        </Button>
      </Center>
    </Container>
  );
};

export default Calendar;
