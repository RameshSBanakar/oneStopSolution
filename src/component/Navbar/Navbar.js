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
        
        {/* {isMenuOpen&&<div>hii</div>} */}
        <div className="navbar__logo">One Stop Solution for All MRM</div>
      </div>
    </nav>
  );
};

export default Navbar;
