import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const TogglePassword = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-80">

        <div className="flex items-center border rounded px-3 py-2">
          <input
            data-testid="password-input"
            type={visible ? "text" : "password"}
            placeholder="Enter password"
            className="flex-1 outline-none"
          />

          <button
            data-testid="toggle-icon"
            onClick={() => setVisible(!visible)}
            type="button"
          >
            {visible ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <p
          data-testid="visibility-label"
          className="mt-2"
        >
          {visible ? "Password Visible" : "Password Hidden"}
        </p>

      </div>
    </div>
  );
};

export default TogglePassword;