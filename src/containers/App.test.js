import { render, screen } from "@testing-library/react";
import App from "./App";

test("check the rendering of the app component", () => {
  render(<App />);
  const todayBtn = screen.getByText(/today/i);
  expect(todayBtn).toBeInTheDocument();
});
