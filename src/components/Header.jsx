import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-inner">
        <div className="logo">
          <div className="nexus-logo-icon">N</div>
          <span>Nexus Blue</span>
        </div>

        {/* Desktop Nav */}
        <nav className="nav-links">
          <a href="#about" className="nav-link">About Us</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#why-us" className="nav-link">Why Nexus Blue</a>
          <a href="#contact" className="btn btn-primary nav-cta">Consultation</a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="mobile-nav">
          <a href="#about" className="mobile-nav-link" onClick={closeMenu}>About Us</a>
          <a href="#services" className="mobile-nav-link" onClick={closeMenu}>Services</a>
          <a href="#why-us" className="mobile-nav-link" onClick={closeMenu}>Why Nexus Blue</a>
          <a href="#contact" className="mobile-nav-cta" onClick={closeMenu}>Book Consultation</a>
        </div>
      )}
    </header>
  );
};

export default Header;
