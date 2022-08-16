import { top_leagues_imgs, rankingsImgs } from "../dist/imgs/index";

const sports = [
  { title: "Football", url: "football" },
  { title: "Basketball", url: "basketball" },
  { title: "Baseball", url: "baseball" },
  { title: "Formula 1", url: "formula-1" },
  { title: "Rugby", url: "rugby" },
  { title: "Handball", url: "handball" },
  { title: "Volleyball", url: "volleyball" },
  { title: "Hockey", url: "hockey" },
  { title: "Table Tennis", url: "table_tennis" },
  { title: "Esports", url: "esports" },
  { title: "American Football", url: "american_football" },
  { title: "Cricket", url: "cricket" },
  { title: "Darts", url: "darts" },
  { title: "Tennis", url: "tennis" },
  { title: "Snooker", url: "snooker" },
  { title: "Futsal", url: "futsal" },
  { title: "Badminton", url: "badminton" },
  { title: "Aussie Rules", url: "aussie_rules" },
  { title: "Beach Volleyball", url: "beach_volleyball" },
  { title: "Waterpolo", url: "waterpolo" },
  { title: "Floorball", url: "floorball" },
  { title: "Bandy", url: "bandy" },
];

const topLeagues = [
  {
    title: "UEFA Champions League",
    url: "uefa_champions_league",
    icon: top_leagues_imgs["uefa_champions_league"],
  },
  {
    title: "UEFA Europa League",
    url: "uefa_europa_league",
    icon: top_leagues_imgs["uefa_europa_league"],
  },
  {
    title: "Premier League",
    url: "premier_league",
    icon: top_leagues_imgs["premier_league"],
  },
  { title: "LaLiga", url: "laliga", icon: top_leagues_imgs["laliga"] },
  {
    title: "Bundesliga",
    url: "bundesliga",
    icon: top_leagues_imgs["bundesliga"],
  },
  { title: "Serie A", url: "serie_a", icon: top_leagues_imgs["serie_a"] },
  { title: "Ligue 1", url: "ligue_1", icon: top_leagues_imgs["ligue_1"] },
  {
    title: "CAF Champions League",
    url: "caf_champions_league",
    icon: top_leagues_imgs["caf_champions_league"],
  },
  {
    title: "Brasileiro Série A",
    url: "brasileiro_série_a",
    icon: top_leagues_imgs["brasileiro_série_a"],
  },
  {
    title: "Premier League",
    url: "premier_league",
    icon: top_leagues_imgs["premier_league_egy"],
  },
  {
    title: "CONMEBOL Libertadores",
    url: "conmebol_libertadores",
    icon: top_leagues_imgs["conmebol_libertadores"],
  },
];

const rankings = [
  {
    title: "FIFA Rankings",
    url: "/fifa_rankings",
    icon: rankingsImgs["fifa"],
  },
  {
    title: "UEFA Rankings",
    url: "/uefa_rankings",
    icon: rankingsImgs["uefa"],
  },
];
export { sports, topLeagues, rankings };
