import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Task Management App",
      description: "A responsive web application for managing daily tasks with drag-and-drop functionality and local storage.",
      tech: ["React", "CSS3", "JavaScript", "Local Storage"],
      demoLink: "#",
      codeLink: "#",
      icon: "fas fa-tasks"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with location detection and 5-day forecast using weather API.",
      tech: ["JavaScript", "API Integration", "Bootstrap", "HTML5"],
      demoLink: "#",
      codeLink: "#",
      icon: "fas fa-cloud-sun"
    },
    {
      title: "E-commerce Product Page",
      description: "Modern e-commerce product page with image gallery, cart functionality, and responsive design.",
      tech: ["React", "CSS3", "JavaScript", "Context API"],
      demoLink: "#",
      codeLink: "#",
      icon: "fas fa-shopping-cart"
    }
  ];

  return (
    <section className="section" id="projects">
      <h2 className="section-title">Recent Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-icon">
              <i className={project.icon}></i>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex} className="skill-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.demoLink} className="project-link">
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>
              <a href={project.codeLink} className="project-link">
                <i className="fab fa-github"></i> Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;