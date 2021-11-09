import { Dispatch, SetStateAction } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ClassCard from "./classCard";
import testData from "../util/testData.json";
import { trainingClass } from "../util/echelon";

const testClass = testData.items[0] as trainingClass;

describe("ClassCard component", () => {
  it("should render training class name and thumbnail", () => {
    const setter: Dispatch<SetStateAction<trainingClass | null>> = () => {};
    render(
      <ClassCard
        setCurrentClass={setter}
        preventTab={false}
        classInfo={testClass}
      />
    );
    expect(screen.getByText(testClass.name)).toBeTruthy();
    expect(
      screen.getByRole("img", { name: testClass.name + " thumbnail" })
    ).toBeTruthy();
  });
  it("should prevent tabbing when preventTab is true", () => {
    const setter: Dispatch<SetStateAction<trainingClass | null>> = () => {};
    render(
      <ClassCard
        setCurrentClass={setter}
        preventTab={true}
        classInfo={testClass}
      />
    );
    expect(screen.getByText(testClass.name)).toBeTruthy();
    expect(
      screen.getByRole("img", { name: testClass.name + " thumbnail" })
    ).toBeTruthy();
    expect(screen.getByText(testClass.name).parentElement?.tabIndex).toBe(-1);
  });
  it("should allow tabbing when preventTab is false", () => {
    const setter: Dispatch<SetStateAction<trainingClass | null>> = () => {};
    render(
      <ClassCard
        setCurrentClass={setter}
        preventTab={false}
        classInfo={testClass}
      />
    );
    expect(screen.getByText(testClass.name)).toBeTruthy();
    expect(
      screen.getByRole("img", { name: testClass.name + " thumbnail" })
    ).toBeTruthy();
    expect(screen.getByText(testClass.name).parentElement?.tabIndex).toBe(0);
  });
  it("should fire setter when clicked", () => {
    const setter = jest.fn();
    render(
      <ClassCard
        setCurrentClass={setter}
        preventTab={false}
        classInfo={testClass}
      />
    );
    expect(setter.mock.calls.length).toBe(0);
    fireEvent.click(screen.getByText(testClass.name));
    expect(setter.mock.calls.length).toBe(1);
  });
  it("should fire setter when spacebar is pressed and card focused", () => {
    const setter = jest.fn();
    render(
      <ClassCard
        setCurrentClass={setter}
        preventTab={false}
        classInfo={testClass}
      />
    );
    expect(setter.mock.calls.length).toBe(0);
    fireEvent.keyUp(screen.getByText(testClass.name), { key: " " });
    expect(setter.mock.calls.length).toBe(1);
  });
  it("should fire setter when enter is pressed and card focused", () => {
    const setter = jest.fn();
    render(
      <ClassCard
        setCurrentClass={setter}
        preventTab={false}
        classInfo={testClass}
      />
    );
    expect(setter.mock.calls.length).toBe(0);
    fireEvent.keyUp(screen.getByText(testClass.name), { key: "Enter" });
    expect(setter.mock.calls.length).toBe(1);
  });
  it("should NOT fire setter when enter or space is pressed and card NOT focused", () => {
    const setter = jest.fn();
    const { container } = render(
      <ClassCard
        setCurrentClass={setter}
        preventTab={false}
        classInfo={testClass}
      />
    );
    expect(setter.mock.calls.length).toBe(0);
    fireEvent.keyUp(container, { key: " " });
    expect(setter.mock.calls.length).toBe(0);
    fireEvent.keyUp(container, { key: "Enter" });
    expect(setter.mock.calls.length).toBe(0);
  });
});
