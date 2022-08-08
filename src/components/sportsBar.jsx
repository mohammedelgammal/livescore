import {
  Container,
  Spacer,
  Tabs,
  TabList,
  Tab,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import { sports } from "../data/local";

const Sportsbar = ({ count }) => {
  return (
    <Container maxW="1280px" mt="10px" px={0}>
      <Tabs variant={"solid-rounded"}>
        <TabList>
          {sports.slice(0, count).map((sport) => (
            <Link
              key={sport.url}
              to={sport === "Football" ? "/" : `/${sport.url}`}
            >
              <Tab>
                <Text>{sport.title}</Text>
              </Tab>
            </Link>
          ))}
          <Spacer />
          <Menu>
            <MenuButton
              ml="20px"
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              {sports.slice(count).map((sport) => (
                <Link key={sport.url} to={`/${sport.url}`}>
                  <MenuItem>{sport.title}</MenuItem>
                </Link>
              ))}
            </MenuList>
          </Menu>
        </TabList>
      </Tabs>
    </Container>
  );
};

export default Sportsbar;
