import List from "../components/List";
import { topLeagues } from "../data/local";

const TopLeagues = () => {
  return (
    <div title="top-leagues">
      <List title="TOP LEAGUES" data={topLeagues} apiType="rapid" />
    </div>
  );
};

export default TopLeagues;
