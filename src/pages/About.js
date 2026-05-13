import React from 'react';
import './About.css';

const About = () => (
  <main className="about">
    <div className="about__container">
      <div className="about__hero">
        <span className="about__tag">Our Story</span>
        <h1>Your Premium<br />Accessories Destination</h1>
        <p>TimbuCloud brings you the finest collection of shoes, bags, cameras, eyewear, and lifestyle accessories. We curate quality products that complement your unique style.</p>
      </div>

      <div className="about__values">
        {[
          { icon: '👟', title: 'Quality First', desc: 'Every accessory is carefully selected for quality, durability, and style — only the best makes it to our collection.' },
          { icon: '🚚', title: 'Fast Delivery', desc: 'Orders are processed same-day and delivered within 24–48 hours, bringing your favorite accessories right to your door.' },
          { icon: '💎', title: 'Premium Selection', desc: 'We curate premium accessories from trusted brands and designers to ensure you get the best value for your money.' },
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
