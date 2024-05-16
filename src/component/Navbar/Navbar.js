import React, { useState } from "react";
import "./Navbar.css"; // Import your CSS file for styling

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          One Step Solution for All MRM
        </div>
       
        {/* <div className={`navbar__menu ${isMenuOpen ? "active" : ""}`}>
          <a href="#" className="navbar__item">
            Home
          </a>
          <a href="#" className="navbar__item">
            About
          </a>
          <a href="#" className="navbar__item">
            Services
          </a>
          <a href="#" className="navbar__item">
            Contact
          </a>
        </div> */}
        <div className="navbar__toggle" onClick={toggleMenu}>
          <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
