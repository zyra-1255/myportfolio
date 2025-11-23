import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="contact-icons">
        <a href="https://github.com/yourusername"><FaGithub /></a>
        <a href="https://linkedin.com/in/yourusername"><FaLinkedin /></a>
      </div>
    </section>
  );
}

export default contact;
