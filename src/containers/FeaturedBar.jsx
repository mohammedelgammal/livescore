import FeaturedMatch from "../components/FeaturedMatch";
import TopPlayers from "../components/TopPlayers.jsx";
import { Stack } from "@chakra-ui/react";

const FeaturedBar = () => {
  return (
    <Stack direction={"column"} spacing={2}>
      <FeaturedMatch />
      <TopPlayers />
    </Stack>
  );
};

export default FeaturedBar;
