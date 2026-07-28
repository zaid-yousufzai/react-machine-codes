import React, { useState } from "react";
import { Menu } from "lucide-react";
import "./sidebar.css";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        data-testid="btn-toggle"
        className="toggle-btn"
        onClick={() => setOpen(!open)}
      >
        <Menu data-testid="icon-menu" />
      </button>

      <div
        data-testid="sidebar"
        className={`sidebar ${open ? "open" : ""}`}
      >
        <nav data-testid="nav-menu">
          <p data-testid="nav-item-home">Home</p>
          <p data-testid="nav-item-about">About</p>
          <p data-testid="nav-item-services">Services</p>
          <p data-testid="nav-item-contact">Contact</p>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;