import React, { useContext } from "react";
import { UserContext } from "./UserProvider";

const Navbar = () => {
  const { isLoggedIn, login, logout } = useContext(UserContext);

  return (
    <nav>
      <h2>App</h2>

      {isLoggedIn ? (
        <>
          <span>Welcome, User! </span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </nav>
  );
};

export default Navbar;