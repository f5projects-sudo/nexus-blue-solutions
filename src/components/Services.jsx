import React from 'react';
import { Briefcase, CreditCard, PieChart, CheckCircle2 } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-header">
          <span className="section-tagline">What We Do</span>
          <h2 className="section-title">Our Core Services</h2>
        </div>

        <div className="services-grid">
          {/* Service 1 */}
          <div className="service-card">
            <div className="service-icon">
              <CreditCard size={28} />
            </div>
            <h3 className="service-title">Debt Management</h3>
            <p className="service-description">
              We negotiate directly with creditors to consolidate, reduce, and restructure your debt into manageable payment plans — eliminating stress and protecting your assets.
            </p>
            <ul className="service-features">
              <li><CheckCircle2 className="feature-check" size={18} /> Creditor Negotiation</li>
              <li><CheckCircle2 className="feature-check" size={18} /> Debt Consolidation</li>
              <li><CheckCircle2 className="feature-check" size={18} /> Bankruptcy Alternatives</li>
              <li><CheckCircle2 className="feature-check" size={18} /> Cash Flow Optimization</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="service-card">
            <div className="service-icon">
              <Briefcase size={28} />
            </div>
            <h3 className="service-title">Credit Repair</h3>
            <p className="service-description">
              Our specialists dispute inaccurate items, remove negative marks, and build a personalized roadmap to boost your credit score — often by 100+ points within months.
            </p>
            <ul className="service-features">
              <li><CheckCircle2 className="feature-check" size={18} /> Full Report Analysis</li>
              <li><CheckCircle2 className="feature-check" size={18} /> Official Dispute Filing</li>
              <li><CheckCircle2 className="feature-check" size={18} /> Score-Building Strategy</li>
              <li><CheckCircle2 className="feature-check" size={18} /> Monthly Progress Tracking</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="service-card">
            <div className="service-icon">
              <PieChart size={28} />
            </div>
            <h3 className="service-title">Lending Portfolio</h3>
            <p className="service-description">
              For lenders and investors — we analyze, optimize, and actively manage lending portfolios to maximize returns, minimize defaults, and ensure regulatory compliance.
            </p>
            <ul className="service-features">
              <li><CheckCircle2 className="feature-check" size={18} /> Risk Assessment</li>
              <li><CheckCircle2 className="feature-check" size={18} /> Delinquency Reduction</li>
              <li><CheckCircle2 className="feature-check" size={18} /> Yield Optimization</li>
              <li><CheckCircle2 className="feature-check" size={18} /> Compliance & Reporting</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
