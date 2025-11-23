import React from 'react';

const contact = () => {
  return (
    <section className="section" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-section">
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            
            <div className="contact-item">
              <i className="fas fa-envelope contact-icon"></i>
              <span>zyra.venancio@email.com</span>
            </div>
            
            <div className="contact-item">
              <i className="fas fa-phone contact-icon"></i>
              <span>+63 912 345 6789</span>
            </div>
            
            <div className="contact-item">
              <i className="fas fa-map-marker-alt contact-icon"></i>
              <span>Cabuyao, Laguna, Philippines</span>
            </div>
            
            <div className="social-links">
              <a href="https://github.com/yourusername" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/yourusername" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/yourusername" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com/yourusername" className="social-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Your name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="your.email@example.com" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Your message here..." required></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              <i className="fas fa-paper-plane"></i> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default contact;