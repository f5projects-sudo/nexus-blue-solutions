import React from 'react';
import { Shield } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <div className="nexus-logo-icon">N</div>
          <span>Nexus Blue</span>
        </div>
        <nav className="nav-links">
          <a href="#about" className="nav-link">About Us</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#why-us" className="nav-link">Why Nexus Blue</a>
          <a href="#contact" className="btn btn-primary" style={{ padding: '10px 20px' }}>Consultation</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
