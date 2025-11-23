import React from 'react';

const Experience = () => {
  return (
    <section className="section" id="experience">
      <h2 className="section-title">Experience</h2>
      
      <div className="experience-item">
        <div className="experience-header">
          <h3 className="experience-title">Freelance Web Developer</h3>
          <span className="experience-year">2023 - Present</span>
        </div>
        <p className="experience-description">
          Building responsive websites and web applications for local businesses and personal projects.
        </p>
        <div className="experience-tech">
          <span className="tech-tag">React</span>
          <span className="tech-tag">PHP</span>
          <span className="tech-tag">MySQL</span>
          <span className="tech-tag">JavaScript</span>
        </div>
      </div>

      <div className="experience-item">
        <div className="experience-header">
          <h3 className="experience-title">E-commerce Project</h3>
          <span className="experience-year">2024</span>
        </div>
        <p className="experience-description">
          Currently developing a full-stack e-commerce platform with React frontend and Laravel backend.
        </p>
        <div className="experience-tech">
          <span className="tech-tag">React</span>
          <span className="tech-tag">Laravel</span>
          <span className="tech-tag">MySQL</span>
          <span className="tech-tag">REST API</span>
        </div>
      </div>
    </section>
  );
};

export default Experience;