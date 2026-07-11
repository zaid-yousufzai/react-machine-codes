import React, { useRef } from "react";

const InputFocus = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" placeholder="Type here" ref={inputRef} />

      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default InputFocus;
