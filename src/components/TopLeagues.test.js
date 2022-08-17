import { render, screen } from "@testing-library/react";
import TopLeagues from "./TopLeagues";
import "@testing-library/jest-dom";

describe("rendering of the top leagues components", () => {
  test("title should be rendered", () => {
    render(<TopLeagues />);
    const title = screen.getByText("TOP LEAGUES");
    expect(title).toBeInTheDocument();
  });
  test("testing the top-leagues links", () => {
    render(<TopLeagues />);
    const topLeaguesLinks = screen.getByTitle("top-leagues");
    expect(topLeaguesLinks).toBeInTheDocument();
  });
});
