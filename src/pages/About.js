import React from 'react';
import './About.css';

const About = () => (
  <main className="about">
    <div className="about__container">
      <div className="about__hero">
        <span className="about__tag">Our Story</span>
        <h1>Connecting Nigerian Farmers<br />to Every Kitchen</h1>
        <p>TimbuCloud was built to bridge the gap between hardworking local farmers and families who want fresh, authentic Nigerian produce without the market stress.</p>
      </div>

      <div className="about__values">
        {[
          { icon: '🌾', title: 'Farm Fresh', desc: 'Every product is sourced directly from verified local farmers across Nigeria — no middlemen, no compromise on quality.' },
          { icon: '🚚', title: 'Fast Delivery', desc: 'Orders are packed same-day and delivered within 24–48 hours, keeping produce fresh from farm to your door.' },
          { icon: '🤝', title: 'Fair Trade', desc: 'We pay farmers fairly and price products honestly. When farmers thrive, communities thrive.' },
        ].map(v => (
          <div key={v.title} className="about__value-card">
            <span className="about__value-icon">{v.icon}</span>
            <h3>{v.title}</h3>
            <p>{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </main>
);

export default About;
