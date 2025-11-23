import React from 'react';

const Hero = () => {
  return (
    <div className="hero-section">
      <h1 className="hero-name">Charles Platon</h1>
      <p className="hero-location">Cabuyao Laguna, Philippines</p>
      <p className="hero-title">Software Engineer</p>
      
      <div className="contact-buttons">
        <a 
          href="https://calendly.com/your-username" 
          className="btn btn-primary"
          target="_blank" 
          rel="noopener noreferrer"
        >
          Schedule a Call
        </a>
        <a 
          href="mailto:charles.platon@email.com" 
          className="btn btn-secondary"
        >
          Send Email
        </a>
      </div>
      
      <p className="hero-tagline">I solve problems I don't even want and still doing it.</p>
    </div>
  );
};

export default Hero;