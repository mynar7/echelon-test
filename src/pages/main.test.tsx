import { render, screen, fireEvent } from "@testing-library/react";
import MainPage from "./main";

import testData from "../util/testData.json";
import { trainingClass } from "../util/echelon";

const testClasses = testData.items as trainingClass[];

describe("MainPage component", () => {
  it("Should Render Main Page and all classes", () => {
    render(<MainPage classList={testClasses} />);
    expect(screen.getByText("Echelon Classes")).toBeTruthy();
    expect(screen.getByText(/show filters/i)).toBeTruthy();
    expect(
      screen.getByRole("textbox", { name: "Search Classes" })
    ).toBeTruthy();
    expect(screen.getByText("Clear")).toBeTruthy();
    for (const testClass of testClasses) {
      expect(screen.getByText(testClass.name)).toBeTruthy();
    }
  });
  it("Should search by class title", () => {
    testClasses[0].name = "banana";
    render(<MainPage classList={testClasses} />);
    expect(screen.getByText("Echelon Classes")).toBeTruthy();
    const input = screen.getByRole("textbox", { name: "Search Classes" });
    expect(input).toBeTruthy();
    fireEvent.change(input, { target: { value: "banana" } });
    expect(screen.getByAltText("banana thumbnail")).toBeTruthy();
    expect(screen.queryByText(testClasses[1].name)).toBeNull();
  });
});
