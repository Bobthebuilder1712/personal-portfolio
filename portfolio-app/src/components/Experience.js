import React from 'react';
import { resumeData } from '../data/resumeData';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="experience-timeline">
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-circle"></div>
                {index < resumeData.experience.length - 1 && <div className="timeline-line"></div>}
              </div>
              
              <div className="timeline-content">
                <div className="exp-header">
                  <h3>{exp.title}</h3>
                  <span className="exp-company">{exp.company}</span>
                </div>
                
                <p className="exp-duration">{exp.duration}</p>
                
                <ul className="exp-highlights">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
