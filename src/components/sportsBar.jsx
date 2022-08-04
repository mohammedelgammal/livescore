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

const Sportsbar = ({ count }) => {
  const sports = [
    { title: "Football", url: "football" },
    { title: "Basketball", url: "basketball" },
    { title: "Tennis", url: "tennis" },
    { title: "Table Tennis", url: "table_tennis" },
    { title: "Hockey", url: "hockey" },
    { title: "Esports", url: "esports" },
    { title: "Handball", url: "handball" },
    { title: "Volleyball", url: "volleyball" },
    { title: "Baseball", url: "baseball" },
    { title: "American Football", url: "american_football" },
    { title: "Motorsport", url: "motorsport" },
    { title: "Cricket", url: "cricket" },
    { title: "Rugby", url: "rugby" },
    { title: "Darts", url: "darts" },
    { title: "Snooker", url: "snooker" },
    { title: "Futsal", url: "futsal" },
    { title: "Badminton", url: "badminton" },
    { title: "Aussie Rules", url: "aussie_rules" },
    { title: "Beach Volleyball", url: "beach_volleyball" },
    { title: "Waterpolo", url: "waterpolo" },
    { title: "Floorball", url: "floorball" },
    { title: "Bandy", url: "bandy" },
  ];

  return (
    <Container maxW="1280px" mt="10px" px={0}>
      <Tabs variant={"solid-rounded"}>
        <TabList>
          {sports.slice(0, count).map((sport) => (
            <Link
              key={sport.url}
              to={sport === "football" ? "/" : `/${sport.url}`}
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
