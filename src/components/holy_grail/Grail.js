import React from "react";
import "./grail.css";

const HolyGrailLayout = () => {
  return (
    <div className="container">
      <header className="header">Header</header>

      <div className="columns">
        <aside className="sidebar">Left Sidebar</aside>
        <main className="main">Main Content</main>
        <aside className="sidebar">Right Sidebar</aside>
      </div>

      <footer className="footer">Footer</footer>
    </div>
  );
};

export default HolyGrailLayout;