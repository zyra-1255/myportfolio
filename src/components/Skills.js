import React from 'react';

const Skills = () => {
  const skills = {
    frontend: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "Tailwind CSS"],
    backend: ["PHP", "Laravel", "MySQL", "Node.js", "REST APIs"],
    tools: ["Git", "VS Code", "Figma", "Photoshop", "Illustrator", "Postman"],
    learning: ["Python", "MongoDB", "Express.js", "React Native"]
  };

  return (
    <section className="section" id="skills">
      <h2 className="section-title">Skills & Technologies</h2>
      <div className="skills-container">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="skill-category">
            <h3 className="skill-category-title">
              {category === 'frontend' ? 'Frontend Development' : 
               category === 'backend' ? 'Backend Development' :
               category === 'learning' ? 'Currently Learning' : 
               category.charAt(0).toUpperCase() + category.slice(1)}
            </h3>
            <div className="skills-list">
              {skillList.map((skill, index) => (
                <span key={index} className={`skill-tag ${category}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;