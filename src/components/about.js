import React from 'react';
import profile from '../assets/profile.jpg';

function about() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <img 
        src={profile} 
        alt="Profile" 
        style={{
          width: '150px', 
          borderRadius:'50%', 
          border: '5px solid #4b6cb7',
          marginBottom: '20px'
        }}
      />
      <p>
        Hi! I’m Zyra, a passionate web developer and designer. I love creating 
        visually appealing and responsive websites using React. I enjoy learning new tech and building cool projects.
      </p>
    </section>
  );
}

export default about;
