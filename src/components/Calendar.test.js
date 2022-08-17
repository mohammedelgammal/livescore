import { fireEvent, render, screen } from "@testing-library/react";
import Calendar from "./Calendar";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "./../app/store";

//tdd coded
describe("check the rendering of the calendar datepicker and today button", () => {
  test("datepicker should be rendered", () => {
    render(
      <Provider store={store}>
        <Calendar />
      </Provider>
    );
    const datepickerElement = screen.getByRole("listbox");
    expect(datepickerElement).toBeInTheDocument();
  });

  test("today button should be rendered", () => {
    render(
      <Provider store={store}>
        <Calendar />
      </Provider>
    );
    const todayBtnElement = screen.getByText("Today");
    expect(todayBtnElement).toBeInTheDocument();
  });
});

describe("checking the functionality of calendar", () => {
  test("today must be selected in datepicker", () => {
    render(
      <Provider store={store}>
        <Calendar />
      </Provider>
    );
    const todayELement = screen.getByRole("option", { selected: true });
    const today = new Date().getUTCDate().toString();
    expect(todayELement.className).toContain(today);
  });
  test("today button must be disabled", () => {
    render(
      <Provider store={store}>
        <Calendar />
      </Provider>
    );
    const todayBtnElement = screen.getByText("Today");
    expect(todayBtnElement).toBeDisabled();
  });
  test("change the selected day according to user-selected day", () => {
    render(
      <Provider store={store}>
        <Calendar />
      </Provider>
    );
    const todayELements = screen.getAllByRole("option");
    todayELements.map((el) => {
      fireEvent.click(el, { target: { selected: true } });
      return expect(el.selected).toBe(true);
    });
  });
  test.skip("when the today button clicked today date selected", () => {
    render(
      <Provider store={store}>
        <Calendar />
      </Provider>
    );
    const todayELement = screen.getByRole("option", { current: "date" });
    const todayBtnElement = screen.getByText("Today");

    fireEvent.click(todayBtnElement, { todayELement: { selected: true } });
    expect(todayELement.selected).toBe(true);
  });
});
