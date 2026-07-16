import React, { useState } from "react";

const Even = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCheck = () => {
    setResult("");
    setLoading(true);

    setTimeout(() => {
      const input = value.trim();
      const num = Number(input);

      if (input === "" || isNaN(num)) {
        setResult("Please enter a valid number.");
      } else if (num % 2 === 0) {
        setResult(`The number ${num} is even.`);
      } else {
        setResult(`The number ${num} is odd.`);
      }

      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-400 px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-300 bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold text-slate-800">
          Even or Odd Checker
        </h1>

        <div className="flex flex-col gap-4">
          <input
            data-testid="number-input"
            type="text"
            placeholder="Enter a number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />

          <button
            data-testid="check-button"
            onClick={handleCheck}
            className="rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.98]"
          >
            Check
          </button>

          <div className="min-h-10">
            {loading ? (
              <p
                data-testid="loading"
                className="text-center font-medium text-slate-600"
              >
                Checking...
              </p>
            ) : (
              <p
                data-testid="result"
                className="text-center font-medium text-slate-700"
              >
                {result}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Even;
