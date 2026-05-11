import React from 'react';
import { Award, ShieldCheck, Target, UserCheck } from 'lucide-react';

const WhyUs = () => {
  return (
    <section id="why-us" className="section why-us">
      <div className="container">
        <div className="section-header">
          <span className="section-tagline">Why Choose Us</span>
          <h2 className="section-title">Real Expertise. Real Results.</h2>
        </div>

        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-item-icon">
              <Award size={24} />
            </div>
            <div>
              <h3 className="feature-item-title">Certified Specialists</h3>
              <p className="feature-item-desc">
                Licensed credit counselors, certified debt specialists, and former banking professionals with over 15+ years average experience.
              </p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-item-icon">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="feature-item-title">No Hidden Fees — Ever</h3>
              <p className="feature-item-desc">
                Flat-rate, transparent pricing from day one. You always know exactly what you're paying for, with zero surprises.
              </p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-item-icon">
              <Target size={24} />
            </div>
            <div>
              <h3 className="feature-item-title">Personalized Action Plans</h3>
              <p className="feature-item-desc">
                No cookie-cutter programs. Every client receives a custom strategy built around their unique financial situation and goals.
              </p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-item-icon">
              <UserCheck size={24} />
            </div>
            <div>
              <h3 className="feature-item-title">Dedicated Account Manager</h3>
              <p className="feature-item-desc">
                One expert guides you from the first consultation all the way through your final resolution — every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
