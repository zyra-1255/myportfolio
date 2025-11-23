import React from 'react';

const Education = () => {
  return (
    <section className="section" id="education">
      <h2 className="section-title">Education</h2>
      
      <div className="education-item">
        <div className="education-header">
          <h3 className="education-title">Bachelor of Science in Computer Science</h3>
          <span className="education-year">2022 - 2025 (Expected)</span>
        </div>
        <p className="education-institution">Pamantasan ng Cabuyao</p>
        <p className="education-details">
          Currently in 3rd year, focusing on Application Development, System Design, and Web Technologies.
        </p>
        <div className="education-courses">
          <span className="course-tag">Web Development</span>
          <span className="course-tag">Database Management</span>
          <span className="course-tag">Software Engineering</span>
          <span className="course-tag">Mobile Development</span>
        </div>
      </div>

      <div className="education-item">
        <div className="education-header">
          <h3 className="education-title">Frontend Development Certification</h3>
          <span className="education-year">2021</span>
        </div>
        <p className="education-institution">Online Courses & Self-Study</p>
        <p className="education-details">
          Learned HTML, CSS, JavaScript fundamentals and started building websites since Grade 11.
        </p>
      </div>
    </section>
  );
};

export default Education;
//education.js