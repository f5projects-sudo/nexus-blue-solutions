import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container animate-fade-in">
        <h1 className="hero-title">
          Rebuild Credit.<br />
          Manage Debt.<br />
          Grow Wealth.
        </h1>
        <p className="hero-subtitle">
          Comprehensive financial solutions for individuals and institutions.<br />
          Proudly Iowa-Based | Des Moines, Iowa
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Start Your Recovery <ArrowRight size={20} />
          </a>
          <a href="#services" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
