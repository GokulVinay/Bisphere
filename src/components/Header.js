// src/components/Header.js
import React from 'react';
import logo from '../assets/images/logo.png'; // Import the logo

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" style={{ height: '50px' }} />
    </header>
  );
}

export default Header;
