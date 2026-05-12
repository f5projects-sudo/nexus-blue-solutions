import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <div className="footer-logo">
              <div className="nexus-logo-icon">N</div>
              <span>Nexus Blue Solutions</span>
            </div>
            <p className="footer-desc">
              Empowering clients nationwide with expert debt management, credit repair, and lending portfolio solutions.
            </p>
          </div>

          <div className="footer-links-group">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#why-us">Why Nexus Blue</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Accreditations</h4>
            <ul>
              <li>BBB A+ Accredited</li>
              <li>AFCC Member</li>
              <li>NFCC Certified</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Nexus Blue Solutions. All rights reserved.</p>
          <p className="motto">"Our liberties we prize and our rights we will maintain" — Iowa State Motto</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
