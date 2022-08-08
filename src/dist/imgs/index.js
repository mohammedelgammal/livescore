function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const topLeaguesImgs = importAll(
  require.context("./top_leagues", false, /\.(png|jpe?g|svg)$/)
);
const rankingsImgs = importAll(
  require.context("./rankings", false, /\.(png|jpe?g|svg|webp)$/)
);
export { topLeaguesImgs, rankingsImgs };
