import { render, screen } from '@testing-library/react';
import App from './App';

test('other renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  const title=screen.getByTitle(/image/)
  expect(title).toBeInTheDocument()
});

test(" other testing the input field",()=>
{
  render(<App/>)
  const inputbox=screen.getByRole("textbox")
  expect(inputbox).toBeInTheDocument()
  const placeholder= screen.getByPlaceholderText("enter username")
  expect(placeholder).toBeInTheDocument()
  expect(inputbox).toHaveAttribute("name","username")
  expect(inputbox).toHaveAttribute("id","userid")
  // expect(inputbox).toHaveAttribute("value","zaid")
})


describe.only("UI test",()=>
{
test("testing1 the input field",()=>
{
  render(<App/>)
  const inputbox=screen.getByRole("textbox")
  expect(inputbox).toBeInTheDocument()
  const placeholder= screen.getByPlaceholderText("enter username")
  expect(placeholder).toBeInTheDocument()
  expect(inputbox).toHaveAttribute("name","username")
  expect(inputbox).toHaveAttribute("id","userid")
  // expect(inputbox).toHaveAttribute("value","zaid")
})
test("testing2 the input field",()=>
{
  render(<App/>)
  const inputbox=screen.getByRole("textbox")
  expect(inputbox).toBeInTheDocument()
  const placeholder= screen.getByPlaceholderText("enter username")
  expect(placeholder).toBeInTheDocument()
  expect(inputbox).toHaveAttribute("name","username")
  expect(inputbox).toHaveAttribute("id","userid")
  // expect(inputbox).toHaveAttribute("value","zaid")
})
})


describe.skip("UI test2",()=>
{
test("testing1 the input field",()=>
{
  render(<App/>)
  const inputbox=screen.getByRole("textbox")
  expect(inputbox).toBeInTheDocument()
  const placeholder= screen.getByPlaceholderText("enter username")
  expect(placeholder).toBeInTheDocument()
  expect(inputbox).toHaveAttribute("name","username")
  expect(inputbox).toHaveAttribute("id","userid")
  // expect(inputbox).toHaveAttribute("value","zaid")
})
test("testing2 the input field",()=>
{
  render(<App/>)
  const inputbox=screen.getByRole("textbox")
  expect(inputbox).toBeInTheDocument()
  const placeholder= screen.getByPlaceholderText("enter username")
  expect(placeholder).toBeInTheDocument()
  expect(inputbox).toHaveAttribute("name","username")
  expect(inputbox).toHaveAttribute("id","userid")
  // expect(inputbox).toHaveAttribute("value","zaid")
})
})

// App.test.js
// App.spec.js
// App.spec.jsx
// __test__ folder no need to add extension