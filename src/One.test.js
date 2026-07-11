

import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("testing the btn 1", () => {
  render(<App />);
  const btn = screen.getByTestId("btn1"); // get single element
  fireEvent.click(btn);
  expect(screen.getByText("hello")).toBeInTheDocument();
});

test("testing the btn 2",()=>
{
    render(<App/>)
    const btn=screen.getByTestId("btn2")
    fireEvent.click(btn);
    expect(screen.getByText("hel")).toBeInTheDocument()
})
