import React, { useState } from 'react';

const Password = () => {
  const [pass, setPass] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setPass(e.target.value);
  };

  const checkPasswordStrength = (str) => {
    let count = 0;

    if (str.length >= 8) count++;
    if (/[A-Z]/.test(str)) count++;
    if (/[a-z]/.test(str)) count++;
    if (/[0-9]/.test(str)) count++;
    if (/[^A-Za-z0-9]/.test(str)) count++;

    if (count <= 1) return "Weak";
    if (count === 2 || count === 3) return "L1";
    if (count === 4) return "L2";
    return "L3";
  };

  const handleCheck = () => {
    const strength = checkPasswordStrength(pass);
    setResult(strength);
  };

  return (
    <div>
      <input
        type="text"
        value={pass}
        onChange={handleChange}
      />
      <button onClick={handleCheck}>Check</button>
      <h1>{result}</h1>
    </div>
  );
};

export default Password;