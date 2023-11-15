// src/components/CustomNavbar.js
import React from 'react';
import './CustomNavbar.css'; // Import custom CSS file for Navbar styles

const CustomNavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">Family Generation</div>

      <div className="navbar__links">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Family</a></li>
        </ul>
      </div>

      <div className="navbar__buttons">
        <button className="navbar__login">Login</button>
        <button className="navbar__signup">Sign Up</button>
      </div>
    </nav>
  );
};

export default CustomNavbar;
