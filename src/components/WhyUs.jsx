import React from 'react';
import { Check } from 'lucide-react';

const WhyUs = () => {
  return (
    <section id="why-us" className="why-us-wrapper">
      <div className="container">
        <div className="wu-header">
          <span className="wu-tagline">W H Y &nbsp;&nbsp; N E X U S &nbsp;&nbsp; B L U E</span>
          <h2 className="wu-title">Real Expertise. Real Results.</h2>
        </div>

        <div className="wu-content-grid">
          {/* Left Column: Features */}
          <div className="wu-features-col">
            <div className="wu-feature">
              <div className="wu-icon-wrapper">
                <Check size={20} strokeWidth={3} className="wu-check-icon" />
              </div>
              <div className="wu-feature-text">
                <h3 className="wu-feature-title">Certified Financial Specialists</h3>
                <p className="wu-feature-desc">
                  Licensed credit counselors, certified debt specialists, and former banking professionals — 15+ years average experience.
                </p>
              </div>
            </div>

            <div className="wu-feature">
              <div className="wu-icon-wrapper">
                <Check size={20} strokeWidth={3} className="wu-check-icon" />
              </div>
              <div className="wu-feature-text">
                <h3 className="wu-feature-title">No Hidden Fees — Ever</h3>
                <p className="wu-feature-desc">
                  Flat-rate, transparent pricing from day one. You always know exactly what you're paying for, with zero surprises.
                </p>
              </div>
            </div>

            <div className="wu-feature">
              <div className="wu-icon-wrapper">
                <Check size={20} strokeWidth={3} className="wu-check-icon" />
              </div>
              <div className="wu-feature-text">
                <h3 className="wu-feature-title">Personalized Action Plans</h3>
                <p className="wu-feature-desc">
                  No cookie-cutter programs. Every client receives a custom strategy built around their unique financial situation and goals.
                </p>
              </div>
            </div>

            <div className="wu-feature">
              <div className="wu-icon-wrapper">
                <Check size={20} strokeWidth={3} className="wu-check-icon" />
              </div>
              <div className="wu-feature-text">
                <h3 className="wu-feature-title">Dedicated Account Manager</h3>
                <p className="wu-feature-desc">
                  One expert guides you from the first consultation all the way through your final resolution — every step of the way.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Performance Metrics */}
          <div className="wu-metrics-col">
            <div className="wu-metrics-box">
              <h3 className="wu-metrics-title">Performance Metrics</h3>
              
              <div className="wu-metric-item">
                <div className="wu-metric-number">97%</div>
                <div className="wu-metric-label">Success Rate</div>
                <div className="wu-progress-bg">
                  <div className="wu-progress-fill" style={{ width: '97%' }}></div>
                </div>
              </div>

              <div className="wu-metric-item">
                <div className="wu-metric-number">150+</div>
                <div className="wu-metric-label">Avg Score Points Gained</div>
                <div className="wu-progress-bg">
                  <div className="wu-progress-fill" style={{ width: '80%' }}></div>
                </div>
              </div>

              <div className="wu-metric-item">
                <div className="wu-metric-number">45%</div>
                <div className="wu-metric-label">Avg Debt Reduction</div>
                <div className="wu-progress-bg">
                  <div className="wu-progress-fill" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>
            <div className="wu-accreditation">
              BBB A+ Accredited &nbsp;&middot;&nbsp; AFCC Member &nbsp;&middot;&nbsp; NFCC Certified
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
