import React from 'react';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span>ZV</span>
        </div>
        <ul className="nav-links">
          <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
          <li><a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
          <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
          <li><a href="#experience" onClick={() => scrollToSection('experience')}>Experience</a></li>
          <li><a href="#education" onClick={() => scrollToSection('education')}>Education</a></li>
          <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;