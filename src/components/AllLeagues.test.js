import { fireEvent, render, screen } from "@testing-library/react";
import AllLeagues from "./AllLeagues";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "./../app/store";

describe("testing the render of the all leagues", () => {
  test("checking the render of the all leagues heading", () => {
    render(
      <Provider store={store}>
        <AllLeagues />
      </Provider>
    );
    const allLeaguesTitle = screen.getByText("ALL LEAGUES");
    expect(allLeaguesTitle).toBeInTheDocument();
  });
  test("filter should be disabled till the fetching is done", () => {
    render(
      <Provider store={store}>
        <AllLeagues />
      </Provider>
    );
    const filterInput = screen.getByPlaceholderText("Filter");
    expect(filterInput).toBeDisabled();
  });
  test("filter input should change", () => {
    render(
      <Provider store={store}>
        <AllLeagues />
      </Provider>
    );
    const filterInput = screen.getByPlaceholderText("Filter");
    fireEvent.change(filterInput, { target: { value: "filtername" } });
    expect(filterInput.value).toBe("filtername");
  });
});
