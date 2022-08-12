import Header from "./Header";
import Sportsbar from "../components/sportsBar";
import Main from "./Main";
import "../dist/styles/style.css";
import useMediaQuery from "../customsHooks/mediaQueries";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const xs = useMediaQuery("(max-width: 480px)"),
    sm = useMediaQuery("(max-width: 720px)"),
    md = useMediaQuery("(max-width: 1024px)"),
    l = useMediaQuery("(max-width: 1280px)"),
    xl = useMediaQuery("(min-width: 1280px)");
  const count = xs ? 2 : sm ? 4 : md ? 8 : l ? 10 : xl ? 12 : 4;

  return (
    <>
      <Header />
      <Sportsbar count={count} />
      <Main />
    </>
  );
};

export default App;
