import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { kebabCaseToTitleCase } from "./helpers";

test("button click flow", () => {
  render(<App />);

  // find an element with a role of button and text matching /blue/i
  const buttonElement = screen.getByRole("button", {
    name: /blue/i,
  });

  // expect the class to be red
  expect(buttonElement).toHaveClass("medium-violet-red");

  // click button
  fireEvent.click(buttonElement);

  //check button text
  expect(buttonElement).toHaveTextContent(/red/i)

  // expect the class to be blue
  expect(buttonElement).toHaveClass("midnight-blue");

  // expect the button text to match /red/i
  expect(buttonElement).toHaveTextContent(/red/i);
});

test("checkbox flow", () => {
  render(<App />)

  //find element
  const buttonElement = screen.getByRole("button", { name: /blue/i })
  const checkboxElement = screen.getByRole("checkbox", {
    name: /disable button/i
  })

  // check initial conditions
  expect(buttonElement).toBeEnabled()
  expect(checkboxElement).not.toBeChecked()

  //click checkbox to disable button
  fireEvent.click(checkboxElement)
  expect(buttonElement).toBeDisabled()
  expect(checkboxElement).toBeChecked()
  expect(buttonElement).toHaveClass("grey")
  fireEvent.click(buttonElement)
  expect(buttonElement).toHaveClass("grey")

  //click checkbox to re-enable button
  fireEvent.click(checkboxElement)
  expect(buttonElement).toBeEnabled()
  expect(checkboxElement).not.toBeChecked()
  expect(buttonElement).toHaveClass("medium-violet-red")
})

test("check flow after button click", () => {
  //render App
  render(<App />)

  // find elements
  const buttonElement = screen.getByRole("button", { name: /blue/i })
  const checkboxElement = screen.getByRole("checkbox", {
    name: /disable button/i
  })

  //click button to change blue
  fireEvent.click(buttonElement)
  expect(buttonElement).toHaveClass("midnight-blue")

  //click checkbox to disable button
  fireEvent.click(checkboxElement)
  expect(buttonElement).toHaveClass("grey")

  //click checkbox to re-enable button
  fireEvent.click(checkboxElement)
  expect(buttonElement).toHaveClass("midnight-blue")
})

describe("kebabCaseToTitleCase", () => {
  test("works for no hyphens", () => {
    expect(kebabCaseToTitleCase("red")).toBe("Red")
  })
  test("works for one hyphen", () => {
    expect(kebabCaseToTitleCase("midnight-blue")).toBe("Midnight Blue")
  })
  test("works for multiple hyphens", () => {
    expect(kebabCaseToTitleCase("medium-violet-red")).toBe("Medium Violet Red")
  })
})
