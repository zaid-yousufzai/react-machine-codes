import renderer from 'react-test-renderer';
import User from './User';

test("testing class component", () => {
  const compData = renderer.create(<User />).getInstance();
  console.log(compData);
  
//   expect(compData.getUser("test")).toBe("test");
});
