import React, { useState } from "react";
import "./DarkMode.css";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={toggleTheme}
        />
        <span className="mode-text">
          {darkMode ? "Dark Mode" : "Light Mode"}
        </span>
      </label>
    </div>
  );
};

export default DarkMode;