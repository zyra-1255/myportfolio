import React from 'react';

function Navbar() {
  return (
    <nav>
      <div style={{fontWeight:'700', fontSize:'1.5rem'}}>My Portfolio</div>
      <div>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar; 
//navbar.js

