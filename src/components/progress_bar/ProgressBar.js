import React, { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const takeAction = (val) => {
    setProgress((prev) => {
      const nextVal = prev + val;
      if (nextVal < 0) return 0;
      if (nextVal > 100) return 100;
      return nextVal;
    });
  };

  const getColor = (value) => {
    if (value > 70) return "yellow";
    if (value > 40) return "red";
    return "blue";
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        style={{
          border: "1px solid black",
          borderRadius: "1%",
          height: "30px",
          width: "500px",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: getColor(progress),
          }}
        />
        <div>
          <button onClick={() => takeAction(10)}>10+</button>
          <button onClick={() => takeAction(-10)}>10-</button>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
