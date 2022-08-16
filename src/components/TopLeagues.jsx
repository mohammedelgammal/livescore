import List from "../components/List";
import { topLeagues } from "../data/local";

const Rankings = () => {
  return <List title="TOP LEAGUES" data={topLeagues} apiType="rapid" />;
};

export default Rankings;
