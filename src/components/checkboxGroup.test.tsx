import { Dispatch, SetStateAction } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckboxGroup, { filter } from "./checkboxGroup";

describe("CheckboxGroup component", () => {
  it("should render checkboxes", () => {
    const setter: Dispatch<SetStateAction<filter>> = () => {};
    render(
      <CheckboxGroup
        groupName={"Banana"}
        optionsList={["one", "two"]}
        optionsFilters={{ one: false, two: false }}
        setOptionsFilters={setter}
      />
    );
    expect(screen.getByText("Banana")).toBeTruthy();
    expect(screen.getByLabelText("one")).toBeTruthy();
    expect(screen.getByLabelText("two")).toBeTruthy();
  });
  it("should call setter when checkbox clicked", () => {
    const setter = jest.fn();
    render(
      <CheckboxGroup
        groupName={"Banana"}
        optionsList={["one", "two"]}
        optionsFilters={{ one: false, two: false }}
        setOptionsFilters={setter}
      />
    );
    expect(setter.mock.calls.length).toBe(0);
    fireEvent.click(screen.getByLabelText("one"));
    expect(setter.mock.calls.length).toBe(1);
    expect(setter.mock.calls[0][0]).toEqual({ one: true, two: false });
  });
});
