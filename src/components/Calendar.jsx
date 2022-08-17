import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container, Center, Button } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { setMatchesDate } from "../features/footbalSlice";

const Calendar = () => {
  const minDate = new Date("2010-01-01T00:00:00");
  const maxDate = new Date("2023-06-01T00:00:00");
  const dispatch = useDispatch();
  const changeDateHandler = (date) => {
    dispatch(setMatchesDate(date));
  };
  const setDateToToday = () => dispatch(setMatchesDate(new Date()));

  return (
    <Container p={0}>
      <DatePicker
        selected={useSelector((state) => state.football.matchesDate)}
        onChange={(date) => changeDateHandler(date)}
        inline
        minDate={minDate}
        maxDate={maxDate}
      />
      <Center>
        <Button
          disabled={
            useSelector((state) => state.football.matchesDate)
              .toISOString()
              .split("T")[0] === new Date().toISOString().split("T")[0]
          }
          mt={1}
          w={"100%"}
          variant={"solid"}
          onClick={setDateToToday}
        >
          Today
        </Button>
      </Center>
    </Container>
  );
};

export default Calendar;
