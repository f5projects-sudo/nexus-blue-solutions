import React from 'react';

const ServiceBlock = ({ number, title, description, features, highlight }) => (
  <div className="service-block">
    <div className="service-header-bar">
      <div className="container">
        <span className="service-tagline">S E R V I C E &nbsp;&nbsp; 0 {number}</span>
        <h2 className="service-block-title">{title}</h2>
      </div>
    </div>
    <div className="service-content-area">
      <div className="container service-content-grid">
        <div className="service-left-col">
          <p className="service-main-desc">{description}</p>
          <div className="service-features-grid">
            {features.map((f, idx) => (
              <div className="service-feature-card" key={idx}>
                <h4 className="feature-title">{f.title}</h4>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="service-right-col">
          <div className="service-highlight-box">
            <h3 className="highlight-title">{highlight.title}</h3>
            <div className="highlight-divider"></div>
            <div className="highlight-stat-main">
              <span className="stat-number">{highlight.mainStat}</span>
              <span className="stat-text">{highlight.mainText}</span>
            </div>
            <div className="highlight-divider"></div>
            <div className="highlight-stat-sub">
              <span className="stat-sub-number">{highlight.subStat}</span>
              <span className="stat-sub-text">{highlight.subText}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Services = () => {
  const servicesData = [
    {
      number: "1",
      title: "Debt Management",
      description: "We negotiate directly with creditors to consolidate, reduce, and restructure your debt into manageable payment plans — eliminating stress and protecting your assets.",
      features: [
        { title: "Creditor Negotiation", desc: "Direct settlement talks to reduce what you owe" },
        { title: "Debt Consolidation", desc: "Merge multiple debts into one manageable payment" },
        { title: "Bankruptcy Alternatives", desc: "Protect assets while avoiding court proceedings" },
        { title: "Cash Flow Optimization", desc: "Restructure payments to free up monthly income" }
      ],
      highlight: {
        title: "Most Popular Service",
        mainStat: "45%",
        mainText: "Average debt reduction achieved",
        subStat: "60 days",
        subText: "Avg. time to results"
      }
    },
    {
      number: "2",
      title: "Credit Repair",
      description: "Our specialists dispute inaccurate items, remove negative marks, and build a personalized roadmap to boost your credit score — often by 100+ points within months.",
      features: [
        { title: "Full Report Analysis", desc: "Comprehensive review of all three bureaus" },
        { title: "Official Dispute Filing", desc: "Legal challenges to inaccurate items" },
        { title: "Score-Building Strategy", desc: "Personalized actionable steps" },
        { title: "Progress Tracking", desc: "Transparent reporting dashboard" }
      ],
      highlight: {
        title: "Highest Success Rate",
        mainStat: "100+",
        mainText: "Avg. score points gained",
        subStat: "3-6 months",
        subText: "Typical program duration"
      }
    },
    {
      number: "3",
      title: "Lending Portfolio",
      description: "For lenders and investors — we analyze, optimize, and actively manage lending portfolios to maximize returns, minimize defaults, and ensure regulatory compliance.",
      features: [
        { title: "Risk Assessment", desc: "Deep evaluation of borrower profiles" },
        { title: "Delinquency Reduction", desc: "Proactive collection strategies" },
        { title: "Yield Optimization", desc: "Maximizing return on capital" },
        { title: "Compliance & Reporting", desc: "Full regulatory adherence" }
      ],
      highlight: {
        title: "Institutional Grade",
        mainStat: "$500M+",
        mainText: "Assets under management",
        subStat: "99.8%",
        subText: "Compliance rating"
      }
    }
  ];

  return (
    <section id="services" className="services-section-wrapper">
      {servicesData.map((svc, idx) => (
        <ServiceBlock key={idx} {...svc} />
      ))}
    </section>
  );
};

export default Services;
