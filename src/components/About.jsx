import React from 'react';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header">
          <span className="section-tagline">Who We Are</span>
          <h2 className="section-title">Empowering Your Financial Future</h2>
          <p className="about-description">
            Nexus Blue Solutions empowers clients to break free from financial hardship through expert debt management, proven credit repair strategies, and institutional-grade lending portfolio management. We were founded to close the financial literacy gap, serving clients in all 50 states from our headquarters in The Hawkeye State.
          </p>
        </div>
        
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-value">$1.8B</div>
            <div className="stat-label">Debt Restructured</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">12K+</div>
            <div className="stat-label">Clients Served</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">97%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
