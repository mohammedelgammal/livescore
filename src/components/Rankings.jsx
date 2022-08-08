import List from "../components/List";
import { rankings } from "../data/local";

const Rankings = () => {
  return <List title="RANKINGS" data={rankings} apiType="rapid" />;
};

export default Rankings;
