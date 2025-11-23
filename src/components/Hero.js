import React from 'react';

const Hero = () => {
  return (
    <div className="hero-section">
      <h1 className="hero-name">Zyra Venancio</h1>
      <p className="hero-location">
        <i className="fas fa-map-marker-alt"></i> Cabuyao Laguna, Philippines
      </p>
      <p className="hero-title">Software Engineer</p>
      
      <div className="contact-buttons">
        <a href="#" className="btn btn-primary">
          <i className="fas fa-calendar-alt"></i> Schedule a Call
        </a>
        <a href="mailto:zyra.venancio@email.com" className="btn btn-secondary">
          <i className="fas fa-envelope"></i> Send Email
        </a>
      </div>
      
      <p className="hero-tagline">
        <i className="fas fa-code"></i> I solve problems I don't even want and still doing it.
      </p>
    </div>
  );
};

export default Hero;