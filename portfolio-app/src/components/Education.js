import React from 'react';
import { resumeData } from '../data/resumeData';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="education-container">
        <h2 className="section-title">Education</h2>
        
        <div className="education-list">
          {resumeData.education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-icon">
                <span>🎓</span>
              </div>
              
              <div className="education-content">
                <h3>{edu.degree}</h3>
                <p className="school-name">{edu.school}</p>
                <p className="education-location">{edu.location}</p>
                <p className="education-duration">{edu.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
