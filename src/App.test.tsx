import { render, waitFor, screen } from "@testing-library/react";
import App from "./App";

import testData from "./util/testData.json";

//const testClasses = testData.items as trainingClass[];
let fetchStub: jest.SpyInstance;
beforeEach(() => {
  fetchStub = jest.spyOn(window, "fetch");
});
afterEach(() => fetchStub.mockRestore());

describe("MainPage component", () => {
  it("Should Render Main Page and all classes", async () => {
    fetchStub.mockResolvedValueOnce({
      ok: true,
      json: async () => testData,
    });
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText("Echelon Classes")).toBeTruthy();
    });
  });
  it("Should show loading while loading", async () => {
    fetchStub.mockResolvedValueOnce({
      ok: true,
      json: async () => testData,
    });
    render(<App />);
    expect(screen.getByText(/loading/i)).toBeTruthy();
    await waitFor(() => {
      expect(screen.getByText("Echelon Classes")).toBeTruthy();
      expect(screen.queryByText(/loading/i)).toBeNull();
    });
  });
  it("Should show error if unable to get data", async () => {
    fetchStub.mockResolvedValueOnce(new Error());
    render(<App />);
    expect(screen.getByText(/loading/i)).toBeTruthy();
    await waitFor(() => {
      expect(screen.getByText(/error/gi)).toBeTruthy();
      expect(screen.queryByText("Echelon Classes")).toBeNull();
    });
  });
});
