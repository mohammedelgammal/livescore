import Header from "./Header";
import Sportsbar from "../components/sportsBar";
import Main from "./Main";
import "../dist/styles/style.css";
import useMediaQuery from "../customsHooks/mediaQueries";
import { Routes, Route } from "react-router-dom";
import Soon from "../components/Soon";
import { sports } from "../data/local";
import NotFound from "../components/NotFound";

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
      <Routes>
        <Route path="/" index element={<Main />} />
        <Route path="/football" element={<Main sport="football" />} />
        {sports.slice(1).map((sport) => (
          <Route
            key={sport.title}
            path={sport.url}
            element={<Soon sport={sport.title} />}
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
