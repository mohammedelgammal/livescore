import { HStack, Text } from "@chakra-ui/react";
import { AiOutlineFall } from "react-icons/ai";
import { BsBellFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack spacing="5px" className="nav-container">
      <Link to="/betting-tips-today" className="nav-link">
        <HStack>
          <AiOutlineFall />
          <Text style={{ whiteSpace: "nowrap" }}> Dropping odds</Text>
        </HStack>
      </Link>
      <Link to="/favorites" className="nav-link">
        <HStack>
          <BsBellFill />
          <Text> Favourites</Text>
        </HStack>
      </Link>
      <Link to="/user" className="nav-link">
        <HStack>
          <FaUserCircle />
          <Text>Profile</Text>
        </HStack>
      </Link>
    </HStack>
  );
};

export default Navbar;
