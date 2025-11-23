import React from 'react';
import profile from '../assets/profile.jpg';

function About() {
  return (
    <section id="about">
      <img src={profile} alt="Profile" />
      <div className="about-text">
        <h2>Hi, I’m Zyra!</h2>
        <p>
          I’m a passionate web developer and designer. I love creating visually appealing,
          responsive websites using React. Learning new technologies and building cool projects excites me!
        </p>
      </div>
      <div className="wave">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path d="M0.00,49.98 C150.00,150.00 349.72,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" 
                style={{stroke: 'none', fill: '#ffffff'}}>
          </path>
        </svg>
      </div>
    </section>
  );
}

export default About;
