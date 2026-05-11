import React from 'react';

const ServiceBlock2 = ({ number, title, description, features, highlight }) => (
  <div className="service-block">
    <div className="service-header-bar">
      <div className="container">
        <span className="service-tagline">S E R V I C E &nbsp;&nbsp; 0 {number}</span>
        <h2 className="service-block-title">{title}</h2>
      </div>
    </div>
    <div className="service-content-area">
      <div className="container">
        <div className="s2-top-row">
          <div className="s2-desc-box">
            <p>{description}</p>
          </div>
          <div className="s2-stat-box-container">
            <div className="s2-stat-box">
              <div className="s2-stat-number">{highlight.mainStat}</div>
              <div className="s2-stat-text">{highlight.mainText}</div>
            </div>
            <div className="s2-stat-notch"></div>
          </div>
        </div>

        <div className="s2-bottom-grid">
          {features.map((f, idx) => (
            <div className="s2-col" key={idx}>
              <div className="s2-circle-container">
                {idx > 0 && idx < 3 && <div className="s2-line-left"></div>}
                {idx === 3 && <div className="s2-line-left s2-line-invisible"></div>}
                {idx < 3 ? (
                  <div className="s2-circle">{idx + 1}</div>
                ) : (
                  <div className="s2-circle-placeholder"></div>
                )}
                {idx < 2 && <div className="s2-line-right"></div>}
              </div>
              <div className="s2-card">
                <h4 className="s2-feature-title" dangerouslySetInnerHTML={{ __html: f.title }}></h4>
                <p className="s2-feature-desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ServiceBlock3 = ({ number, title, description, features, highlight }) => (
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
              <div className="service-feature-card s3-feature-card" key={idx}>
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
              <span className="s3-stat-number">{highlight.stats[0].number}</span>
              <span className="stat-text">{highlight.stats[0].text}</span>
            </div>
            <div className="highlight-divider"></div>
            <div className="highlight-stat-main">
              <span className="s3-stat-number">{highlight.stats[1].number}</span>
              <span className="stat-text">{highlight.stats[1].text}</span>
            </div>
            <div className="highlight-divider"></div>
            <div className="highlight-stat-main">
              <span className="s3-stat-number">{highlight.stats[2].number}</span>
              <span className="stat-text">{highlight.stats[2].text}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

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
        { title: "Full Report<br/>Analysis", desc: "We pull all 3 bureaus and identify every negative item" },
        { title: "Dispute<br/>Filing", desc: "Official disputes sent for inaccurate or unverifiable items" },
        { title: "Score-Building<br/>Strategy", desc: "Personalized plan to build positive credit history" },
        { title: "Monthly<br/>Tracking", desc: "Progress reports every 30 days until your goal is reached" }
      ],
      highlight: {
        title: "",
        mainStat: "150+",
        mainText: "Avg. credit score points gained",
        subStat: "",
        subText: ""
      }
    },
    {
      number: "3",
      title: "Lending Portfolio Management",
      description: "For lenders and investors — we analyze, optimize, and actively manage lending portfolios to maximize returns, minimize defaults, and ensure regulatory compliance.",
      features: [
        { title: "Portfolio Risk Assessment", desc: "Deep-dive analysis of credit exposure, concentration risk, and default probability across your entire book." },
        { title: "Delinquency Reduction", desc: "Data-driven strategies to proactively identify and manage at-risk borrowers before defaults occur." },
        { title: "Yield Optimization", desc: "Restructuring and pricing recommendations to improve risk-adjusted returns across the portfolio." },
        { title: "Compliance & Reporting", desc: "Full regulatory reporting support — CFPB, FDIC, Basel compliance frameworks handled for you." }
      ],
      highlight: {
        title: "For Institutions",
        stats: [
          { number: "$1.8B", text: "Portfolios under management" },
          { number: "97%", text: "Client retention rate" },
          { number: "300+", text: "Institutional partners" }
        ]
      }
    }
  ];

  return (
    <section id="services" className="services-section-wrapper">
      {servicesData.map((svc, idx) => {
        if (svc.number === "2") {
          return <ServiceBlock2 key={idx} {...svc} />
        }
        if (svc.number === "3") {
          return <ServiceBlock3 key={idx} {...svc} />
        }
        return <ServiceBlock key={idx} {...svc} />
      })}
    </section>
  );
};

export default Services;
