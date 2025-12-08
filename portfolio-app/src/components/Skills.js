import React from 'react';
import { resumeData } from '../data/resumeData';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
        
        <div className="skills-grid">
          <div className="skills-category">
            <h3>Technical Skills</h3>
            <div className="skill-tags">
              {resumeData.skills.technical.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3>Languages</h3>
            <div className="skill-tags">
              {resumeData.skills.languages.map((language, index) => (
                <span key={index} className="skill-tag language-tag">
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="skills-breakdown">
          <div className="skill-item">
            <div className="skill-header">
              <h4>Frontend Development</h4>
              <span className="skill-level">Advanced</span>
            </div>
            <p>HTML, CSS, JavaScript, React.js - Building responsive and interactive web interfaces</p>
          </div>

          <div className="skill-item">
            <div className="skill-header">
              <h4>Full Stack Development</h4>
              <span className="skill-level">Intermediate</span>
            </div>
            <p>PHP, SQL, Database management - Creating complete web solutions</p>
          </div>

          <div className="skill-item">
            <div className="skill-header">
              <h4>Data & Tools</h4>
              <span className="skill-level">Intermediate</span>
            </div>
            <p>MS Excel, SQL, Data visualization - Analytical and productivity tools</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
