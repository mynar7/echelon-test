import { Dispatch, SetStateAction } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ClassModal from "./classModal";

import testData from "../util/testData.json";
import { trainingClass } from "../util/echelon";

const testClass = testData.items[0] as trainingClass;

describe("ClassModal component", () => {
  it("Should render class info", () => {
    const setter: Dispatch<SetStateAction<trainingClass | null>> = () => {};
    testClass.desc = "banana"; // description text is optional
    render(<ClassModal currentClass={testClass} setCurrentClass={setter} />);
    expect(screen.getByText(testClass.name)).toBeTruthy();
    expect(screen.getByText("Level: " + testClass.level)).toBeTruthy();
    expect(screen.getByText("banana")).toBeTruthy();
    expect(screen.getByText("Instructor: " + testClass.inst)).toBeTruthy();
    expect(screen.getByText("Length: " + testClass.len)).toBeTruthy();
    expect(screen.getByText("Category: " + testClass.cat)).toBeTruthy();
    expect(screen.getByRole("img", { name: testClass.name })).toBeTruthy();
  });
  it("Should dismiss when dismiss is clicked", () => {
    const setter = jest.fn();
    render(<ClassModal currentClass={testClass} setCurrentClass={setter} />);
    expect(screen.getByText(testClass.name)).toBeTruthy();
    fireEvent.click(screen.getByText(/dismiss/i));
    expect(setter.mock.calls[0][0]).toBeNull();
  });
  it("Should dismiss when X is clicked", () => {
    const setter = jest.fn();
    render(<ClassModal currentClass={testClass} setCurrentClass={setter} />);
    expect(screen.getByText(testClass.name)).toBeTruthy();
    fireEvent.click(screen.getByText("✖"));
    expect(setter.mock.calls[0][0]).toBeNull();
  });
  it("Should dismiss when click outside of modal", () => {
    const setter = jest.fn();
    const { container } = render(
      <ClassModal currentClass={testClass} setCurrentClass={setter} />
    );
    expect(screen.getByText(testClass.name)).toBeTruthy();
    fireEvent.click(container.firstElementChild as Element);
    expect(setter.mock.calls[0][0]).toBeNull();
  });
});
