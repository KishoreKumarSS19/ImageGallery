import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        Lumina<span>Gallery</span>
      </div>
      <div className="nav-menu">
        <span className="nav-link">Archive</span>
        <span className="nav-link">Exhibits</span>
        <button className="contact-action">Get in Touch</button>
      </div>
    </nav>
  );
};

export default Navbar;