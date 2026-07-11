import React, { useState } from "react";

const Calculator = () => {
  const [formData, setFormData] = useState({
    amount: "",
    interest: "",
    term: "",
  });

  const [errors, setErrors] = useState({});

  const [pay, setPay] = useState(0);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const p = formData.amount;
    const r = formData.interest;
    const n = formData.term;

    let newErrors = {};

    if (!formData.amount.trim()) {
      newErrors.amount = "Amount is required";
    }
    if (!formData.interest.trim()) {
      newErrors.interest = "interest is required";
    }
    if (!formData.term.trim()) {
      newErrors.term = "term is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const res = p * ((r * Math.pow(1 + r, n)) / Math.pow(1 + r, n) - 1);
    setPay(res);
    setFormData({
      amount: "",
      interest: "",
      term: "",
    });

    setErrors({
      amount: "",
      interest: "",
      term: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Loan Amount</label>
          <input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
          <p>{errors.amount}</p>
        </div>

        <div>
          <label>Annual Interest</label>
          <input
            type="text"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
          />
          <p>{errors.interest}</p>
        </div>

        <div>
          <label>Loan Term</label>
          <input
            type="text"
            name="term"
            value={formData.term}
            onChange={handleChange}
          />
          <p>{errors.term}</p>
        </div>
        <button type="submit">Submit</button>
      </form>
      <h1>{pay !== 0 && `Monthaly Payment is ${pay}`}</h1>
    </div>
  );
};

export default Calculator;
