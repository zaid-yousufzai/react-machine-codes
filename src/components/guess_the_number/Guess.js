import React, { useEffect, useState } from "react";

const Guess = () => {
  const [num, setNum] = useState(0);
  const [input, setInput] = useState("");
  const [res, setRes] = useState("");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    generateNumber();
  }, []);

  const generateNumber = () => {
    setNum(Math.floor(Math.random() * 10) + 1);
  };

  const handleCheck = () => {
    const guessed = Number(input);

    if (input === "" || isNaN(guessed)) {
      setRes("Invalid");
      return;
    }

    setAttempt((prev) => prev + 1);

    if (guessed === num) {
      setRes("Correct");
    } else if (guessed < num) {
      setRes("Too Low");
    } else {
      setRes("Too High");
    }
  };

  const handleReset = () => {
    generateNumber();
    setInput("");
    setRes("");
    setAttempt(0);
  };

  return (
    <div>
      <h1>
        {res === "Correct"
          ? `You guessed correct number ${res} in ${attempt} attempts`
          : res}
      </h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="write any number between 1-10"
      />
      <p> Attempts {attempt}</p>
      <button onClick={handleCheck}>Check</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Guess;
