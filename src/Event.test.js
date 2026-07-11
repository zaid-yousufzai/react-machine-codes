import { screen,render,fireEvent } from "@testing-library/react";
import App from "./App";

test("Testing the event",()=>
{
    render(<App/>)
    const input=screen.getByRole("textbox");
    fireEvent.change(input,{target:{value:'a'}})
    expect(input.value).toBe("a")

})

test("testing the btn",()=>
{
    render(<App/>)
    let btn=screen.getByRole("button")
    fireEvent.click(btn);
    expect(screen.getByText("Zaid")).toBeInTheDocument()
})