import React, { useState } from "react";
import "./chips.css";

const Chips = () => {
  const [chips, setChips] = useState([]);
  const [inp, setInp] = useState("");

  const handleAdd = () => {
    const trimmed = inp.trim();
    if (trimmed.length > 0) {
      setChips((prev) => [...prev, trimmed]);
      setInp("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  const handleRemove = (index) => {
    setChips((prev) => prev.filter((_, idx) => idx !== index));
  };

  return (
    <div>
      <input
        type="text"
        value={inp}
        onChange={(e) => setInp(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleAdd}>Add</button>

      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {chips.map((item, index) => (
          <div key={index} className="main">
            <span>{item}</span>
            <button onClick={() => handleRemove(index)} className="rm">
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chips;
