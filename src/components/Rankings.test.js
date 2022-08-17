import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Rankings from "./Rankings";

describe("rankings must be rendered", () => {
  test("testing the title of rankings", () => {
    render(<Rankings />);
    const rankingsTitle = screen.getByText("RANKINGS");
    expect(rankingsTitle).toBeInTheDocument();
  });
  test("testing the rankings links", () => {
    render(<Rankings />);
    const rankingsLinks = screen.getByTitle("rankings");
    expect(rankingsLinks).toBeInTheDocument();
  });
});
