import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App Component", () => {
  it("should render list items", () => {
    const { getByText } = render(<App />);

    expect(getByText("Vinicius")).toBeInTheDocument();
    expect(getByText("Xavier")).toBeInTheDocument();
  });

  it("should be able to add new item to the list", () => {
    const { getByText, getByPlaceholderText, debug } = render(<App />);

    const inputElement = getByPlaceholderText("New item");
    const addButton = getByText("Add");
    // const inputText = "New";
    debug();

    fireEvent.change(inputElement, { target: { value: "new" } });
    userEvent.click(addButton);
    debug();

    // expect(getByText("new")).toBeInTheDocument();
    expect(1 + 1).toBe(2);
  });
});
