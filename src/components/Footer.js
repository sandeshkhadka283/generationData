// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Import custom CSS file for footer styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} www.familygeneration.com . All Rights Reserved.</p>
        <p>Contact: support@familygeneration.com</p>
      </div>
    </footer>
  );
};

export default Footer;
