import { render, screen } from '@testing-library/react';
import App from './App';

beforeAll(()=>
{
  console.log("Before all");
  
})

beforeEach(()=>
{
  console.log("before each");
  
})

afterAll(()=>
{
  console.log("after all");
  
})

afterEach(()=>
{
  console.log("after each");
  
})



// to run only this "qfile hit npm run test Other" in the terminal
test('renders learn react link1', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  const title=screen.getByTitle(/image/)
  expect(title).toBeInTheDocument()
});


test('renders learn react link2', () => {
  expect(render(<App/>)).toMatchSnapshot()

});



