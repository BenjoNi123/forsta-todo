import App from "../App";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import React from "react";

describe("TodoApp", () => {
  it("renders app", () => {
    const view = render(<App />);
    expect(view).not.toBeUndefined();
  });

  it("renders initial items", () => {
    render(<App />);

    expect(screen.getByText("Buy milk")).toBeDefined();
    const buyMilkTodo = screen.getByTestId("toggle0");
    expect(buyMilkTodo).toBeChecked();

    //TODO: Verify second todo

    expect(screen.getByText("Buy bread")).toBeDefined();
    const buyBreadTodo = screen.getByTestId("toggle1");
    expect(buyBreadTodo).not.toBeChecked();
  });
  it("creates Todo", () => {
    render(<App />)
    const inputElem = screen.getByTestId("inputTodo") as HTMLInputElement;
    fireEvent.change(screen.getByTestId("inputTodo"), { target: { value: "TEST" } });
    fireEvent.submit(inputElem)
    expect(screen.getByText("TEST")).toBeDefined();
    const buyBreadTodo = screen.getByTestId("toggle2");
    expect(buyBreadTodo).not.toBeChecked();

  })
  it("checks Toggle", () => {
    render(<App />)
    const buyMilkTodo = screen.getByTestId("toggle0");
    fireEvent.click(buyMilkTodo);
    expect(buyMilkTodo).not.toBeChecked();
  })
  it("delete Todo", () => {
    render(<App />)
    fireEvent.click(screen.getByTestId("delete0"));
    expect(() => screen.getByText('Buy milk')).toThrow('Unable to find an element');
  })
});
