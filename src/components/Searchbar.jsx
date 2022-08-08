import {
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { filterCountries } from "../features/footbalSlice";

const Searchbar = ({ position, placeholder }) => {
  const InputElement =
    position === "Right" ? InputRightElement : InputLeftElement;
  const dispatch = useDispatch();

  return (
    <InputGroup>
      <InputElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input
        type="text"
        placeholder={placeholder}
        variant="filled"
        onChange={
          position === "Right"
            ? (e) => dispatch(filterCountries(e.target.value))
            : null
        }
      />
    </InputGroup>
  );
};

export default Searchbar;
