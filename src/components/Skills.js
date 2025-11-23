import React from 'react';

const Skills = () => {
  const skills = {
    frontend: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    backend: ["PHP", "Laravel", "MySQL", "Node.js", "REST APIs"],
    "game-dev": ["Unreal Engine", "C++", "3D Modeling", "Blender"],
    tools: ["Git", "VS Code", "Figma", "Photoshop", "Illustrator"]
  };

  return (
    <section className="section">
      <h2 className="section-title">Skills & Technologies</h2>
      <div className="skills-container">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="skill-category">
            <h3 className="skill-category-title">
              {category === 'game-dev' ? 'Game Development' : category.charAt(0).toUpperCase() + category.slice(1)}
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