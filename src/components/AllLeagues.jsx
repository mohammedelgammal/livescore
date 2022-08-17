import List from "../components/List";
import { useGetCountriesQuery } from "../services/footballApi";
import {
  InputGroup,
  InputRightElement,
  Input,
  Heading,
  Stack,
  Container,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredLeagues } from "../features/footbalSlice";
import { useEffect } from "react";

const AllLeagues = () => {
  const { data: leagues, isFetching, error } = useGetCountriesQuery();
  const dispatch = useDispatch();
  const filterCountries = (filterTerm) => {
    const filteredLeagues = leagues?.response?.filter((league) =>
      league.name.toString().toLowerCase().includes(filterTerm.toLowerCase())
    );
    dispatch(setFilteredLeagues(filteredLeagues));
  };
  useEffect(() => {
    dispatch(setFilteredLeagues(leagues?.response));
  }, [dispatch, leagues?.response]);

  return (
    <Stack direction={"column"} spacing={7}>
      <Heading as={"h3"} textAlign="center" size="sm">
        ALL LEAGUES
      </Heading>
      <InputGroup>
        <InputRightElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          type="text"
          placeholder={"Filter"}
          variant="filled"
          onChange={(e) => filterCountries(e.target.value)}
          disabled={
            useSelector((state) => state.football.filteredCountries)
              ? false
              : true
          }
        />
      </InputGroup>
      <Container p={0}>
        <List
          data={useSelector((state) => state.football.filteredCountries)}
          apiType="sports"
          isFetching={isFetching}
          error={error}
          hasFilter
        />
      </Container>
    </Stack>
  );
};

export default AllLeagues;
