import { topLeaguesImgs, rankingsImgs } from "../dist/imgs/index";

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
    icon: topLeaguesImgs["uefa_champions_league.png"],
  },
  {
    title: "UEFA Europa League",
    url: "uefa_europa_league",
    icon: topLeaguesImgs["uefa_europa_league.png"],
  },
  {
    title: "Premier League",
    url: "premier_league",
    icon: topLeaguesImgs["premier_league.png"],
  },
  { title: "LaLiga", url: "laliga", icon: topLeaguesImgs["laliga.png"] },
  {
    title: "Bundesliga",
    url: "bundesliga",
    icon: topLeaguesImgs["bundesliga.png"],
  },
  { title: "Serie A", url: "serie_a", icon: topLeaguesImgs["serie_a.png"] },
  { title: "Ligue 1", url: "ligue_1", icon: topLeaguesImgs["ligue_1.png"] },
  {
    title: "CAF Champions League",
    url: "caf_champions_league",
    icon: topLeaguesImgs["caf_champions_league.png"],
  },
  {
    title: "Brasileiro Série A",
    url: "brasileiro_série_a",
    icon: topLeaguesImgs["brasileiro_série_a.png"],
  },
  {
    title: "Premier League",
    url: "premier_league",
    icon: topLeaguesImgs["premier_league_egy.png"],
  },
  {
    title: "CONMEBOL Libertadores",
    url: "conmebol_libertadores",
    icon: topLeaguesImgs["conmebol_libertadores.png"],
  },
];

const rankings = [
  {
    title: "FIFA Rankings",
    url: "/fifa_rankings",
    icon: rankingsImgs["fifa.webp"],
  },
  {
    title: "UEFA Rankings",
    url: "/uefa_rankings",
    icon: rankingsImgs["uefa.webp"],
  },
];
export { sports, topLeagues, rankings };
