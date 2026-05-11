import React from 'react';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-header-container">
          <span className="about-tagline">W H O &nbsp;&nbsp;W E &nbsp;&nbsp;A R E</span>
          <h2 className="about-title">Company Overview</h2>
        </div>
        
        <div className="about-content-grid">
          <div className="about-left-col">
            <div className="about-box mission-box">
              <h3 className="box-title">Our Mission</h3>
              <p>
                Nexus Blue Solutions empowers clients to break free from financial hardship through expert debt management, proven credit repair strategies, and institutional-grade lending portfolio management.
              </p>
            </div>
            
            <div className="about-stats-row">
              <div className="about-box stat-box">
                <div className="stat-value">$1.8B</div>
                <div className="stat-label">Debt<br/>Restructured</div>
              </div>
              <div className="about-box stat-box">
                <div className="stat-value">12K+</div>
                <div className="stat-label">Clients<br/>Served</div>
              </div>
              <div className="about-box stat-box">
                <div className="stat-value">97%</div>
                <div className="stat-label">Client<br/>Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="about-right-col">
            <div className="about-box glance-box">
              <h3 className="box-title">At a Glance</h3>
              <ul className="glance-list">
                <li>Proudly headquartered in Iowa — The Hawkeye State</li>
                <li>Founded to close the financial literacy gap</li>
                <li>Serving clients in all 50 states</li>
                <li>BBB A+ Accredited Business</li>
                <li>AFCC & NFCC Certified</li>
                <li>150+ avg. credit score points gained</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
