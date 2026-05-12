import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await fetch('https://n8n.automationf5networking.com/webhook/3e4dc54e-af2d-495e-9173-cea7691dd464', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="contact-header">
          <span className="contact-tagline">G E T &nbsp;&nbsp; I N &nbsp;&nbsp; T O U C H</span>
          <h2 className="contact-title">Book Your Free Consultation</h2>
          <p className="contact-subtitle">
            No obligation, no pressure — just clarity and a clear path forward.
            One of our specialists will reach out within 24 hours.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: Contact Info */}
          <div className="contact-info-col">
            <div className="contact-info-card">
              <div className="contact-info-item">
                <div className="contact-icon-box">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="contact-info-label">Phone</div>
                  <div className="contact-info-value">(305) 555-0100</div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon-box">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="contact-info-label">Email</div>
                  <div className="contact-info-value">hello@nexusbluesolutions.com</div>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon-box">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="contact-info-label">Location</div>
                  <div className="contact-info-value">Des Moines, Iowa<br />Serving clients nationwide</div>
                </div>
              </div>

              <div className="contact-badges">
                <span className="contact-badge">BBB A+ Accredited</span>
                <span className="contact-badge">AFCC Member</span>
                <span className="contact-badge">NFCC Certified</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-col">
            {submitted ? (
              <div className="contact-success">
                <div className="success-icon">
                  <Check size={32} />
                </div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. One of our specialists will contact you within 24 hours.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service of Interest *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Select a service...</option>
                      <option value="debt">Debt Management</option>
                      <option value="credit">Credit Repair</option>
                      <option value="lending">Lending Portfolio</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Tell Us About Your Situation</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Briefly describe your financial situation and what you're looking to achieve..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="contact-submit-btn" disabled={loading}>
                  <span>{loading ? 'Sending...' : 'Send My Request'}</span>
                  {!loading && <Send size={18} />}
                </button>
                {error && <p className="contact-form-error">{error}</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
