import React from 'react';

const Contact = () => {
  return (
    <section className="section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-section">
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <span>charles.platon@email.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <span>+63 912 345 6789</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>Cabuyao, Laguna, Philippines</span>
            </div>
            
            <div className="social-links">
              <a 
                href="https://github.com/yourusername" 
                className="social-link" 
                aria-label="GitHub"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                className="social-link" 
                aria-label="LinkedIn"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://twitter.com/yourusername" 
                className="social-link" 
                aria-label="Twitter"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span>Twitter</span>
              </a>
              <a 
                href="https://instagram.com/yourusername" 
                className="social-link" 
                aria-label="Instagram"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span>Instagram</span>
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
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; // Make sure this line is present!