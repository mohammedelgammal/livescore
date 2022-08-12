import List from "../components/List";
import { useGetCountriesQuery } from "../services/footballApi";
import {
  InputGroup,
  InputRightElement,
  Input,
  Heading,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";

const AllLeagues = () => {
  const { data: leagues, isFetching, error } = useGetCountriesQuery();
  const [filterTerm, setFilterTerm] = useState("");
  const [countries, setCountries] = useState(leagues?.response);

  useEffect(() => {
    const filteredCountries = leagues?.response?.filter((league) =>
      league.name.toString().toLowerCase().includes(filterTerm.toLowerCase())
    );
    setCountries(filteredCountries);
  }, [leagues, filterTerm]);

  return (
    <>
      <Heading as={"h3"} size="sm">
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
          onChange={(e) => setFilterTerm(e.target.value)}
        />
      </InputGroup>
      <List
        data={countries}
        apiType="sports"
        isFetching={isFetching}
        error={error}
        hasFilter
      />
    </>
  );
};

export default AllLeagues;
