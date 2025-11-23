import React from 'react';
import profile from '../assets/profile.jpg';

function about() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <img src={profile} alt="Profile" style={{width: '150px', borderRadius:'50%'}}/>
      <p>
        Hi! I’m Zyra, a passionate web developer and designer. I love creating 
        beautiful and functional websites using React.
      </p>
    </section>
  );
}

export default about;
