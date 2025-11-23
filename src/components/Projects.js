import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "The Lost Hospital",
      description: "A 3D survival horror game built with Unreal Engine featuring immersive environments and puzzle-solving mechanics.",
      tech: ["Unreal Engine", "C++", "3D Modeling"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with React frontend and Laravel backend, featuring payment integration and admin dashboard.",
      tech: ["React", "Laravel", "MySQL", "Stripe"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website showcasing projects and skills with modern UI/UX design principles.",
      tech: ["React", "CSS3", "JavaScript"],
      demoLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <section className="section">
      <h2 className="section-title">Recent Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="skill-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.demoLink} className="project-link">Live Demo</a>
              <a href={project.codeLink} className="project-link">Source Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;