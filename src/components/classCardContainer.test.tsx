import { Dispatch, SetStateAction } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ClassCardContainer from "./classCardContainer";
import testData from "../util/testData.json";
import { trainingClass } from "../util/echelon";

const testClasses = testData.items as trainingClass[];

describe("ClassCardContainer component", () => {
  it("should render card for each class in list", () => {
    const setter: Dispatch<SetStateAction<trainingClass | null>> = () => {};
    render(
      <ClassCardContainer
        classList={testClasses}
        preventTabbingOnCards={false}
        setCurrentClass={setter}
      />
    );
    for (const testClass of testClasses) {
      expect(screen.getByText(testClass.name)).toBeTruthy();
      expect(
        screen.getByRole("img", { name: testClass.name + " thumbnail" })
      ).toBeTruthy();
    }
  });
  it("should prevent cards from tabbing when propped true", () => {
    const setter: Dispatch<SetStateAction<trainingClass | null>> = () => {};
    render(
      <ClassCardContainer
        classList={testClasses}
        preventTabbingOnCards={true}
        setCurrentClass={setter}
      />
    );
    for (const testClass of testClasses) {
      expect(screen.getByText(testClass.name).parentElement?.tabIndex).toBe(-1);
    }
  });
  it("should allow cards to tab when propped false", () => {
    const setter: Dispatch<SetStateAction<trainingClass | null>> = () => {};
    render(
      <ClassCardContainer
        classList={testClasses}
        preventTabbingOnCards={false}
        setCurrentClass={setter}
      />
    );
    for (const testClass of testClasses) {
      expect(screen.getByText(testClass.name).parentElement?.tabIndex).toBe(0);
    }
  });
  it("clicking card should trigger setter fn", () => {
    const setter = jest.fn();
    render(
      <ClassCardContainer
        classList={testClasses}
        preventTabbingOnCards={false}
        setCurrentClass={setter}
      />
    );
    testClasses.forEach((testClass, index) => {
      fireEvent.click(screen.getByText(testClass.name));
      expect(setter.mock.calls[index][0]).toEqual(testClass);
    });
  });
  it("pressing space without card focused should not trigger setter fn", () => {
    const setter = jest.fn();
    const { container } = render(
      <ClassCardContainer
        classList={testClasses}
        preventTabbingOnCards={false}
        setCurrentClass={setter}
      />
    );
    testClasses.forEach(() => {
      fireEvent.keyUp(container, { key: " " });
      expect(setter.mock.calls.length).toBe(0);
    });
  });
  it("pressing enter without card focused should not trigger setter fn", () => {
    const setter = jest.fn();
    const { container } = render(
      <ClassCardContainer
        classList={testClasses}
        preventTabbingOnCards={false}
        setCurrentClass={setter}
      />
    );
    testClasses.forEach(() => {
      fireEvent.keyUp(container, { key: "Enter" });
      expect(setter.mock.calls.length).toBe(0);
    });
  });
  it("pressing space with card focused should trigger setter fn", () => {
    const setter = jest.fn();
    render(
      <ClassCardContainer
        classList={testClasses}
        preventTabbingOnCards={false}
        setCurrentClass={setter}
      />
    );
    testClasses.forEach((testClass, index) => {
      fireEvent.keyUp(screen.getByText(testClass.name), { key: " " });
      expect(setter.mock.calls[index][0]).toEqual(testClass);
    });
  });
  it("pressing enter with card focused should trigger setter fn", () => {
    const setter = jest.fn();
    render(
      <ClassCardContainer
        classList={testClasses}
        preventTabbingOnCards={false}
        setCurrentClass={setter}
      />
    );
    testClasses.forEach((testClass, index) => {
      fireEvent.keyUp(screen.getByText(testClass.name), { key: "Enter" });
      expect(setter.mock.calls[index][0]).toEqual(testClass);
    });
  });
});
