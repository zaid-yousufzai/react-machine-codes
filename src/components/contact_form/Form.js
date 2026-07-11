import React, { useState } from "react";

const Form = () => {
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

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
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSuccess(formData.name);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setErrors({});
  };

  return (
    <div>
      {success && <p>{`Thank You ${success}`}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <p>{errors.name}</p>
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <p>{errors.email}</p>
        </div>

        <div>
          <label>Message</label>
          <input
            type="text"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <p>{errors.message}</p>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
