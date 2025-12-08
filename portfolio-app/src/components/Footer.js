import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {currentYear} Bobby Dev. All rights reserved.</p>
        <p>Designed & Built with React</p>
      </div>
    </footer>
  );
};

export default Footer;
