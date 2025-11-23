import React from 'react';
import profile from '../assets/profile.jpg';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Hello, I’m Zyra!</h1>
        <p>Web Developer | Designer | Creative Thinker</p>
        <div className="contact-icons">
          <a href="https://github.com/yourusername"><FaGithub /></a>
          <a href="https://linkedin.com/in/yourusername"><FaLinkedin /></a>
          <a href="https://twitter.com/yourusername"><FaTwitter /></a>
        </div>
      </div>
      <img src={profile} alt="Profile" />
      <div className="wave"></div>
    </section>
  );
}

export default Hero;
