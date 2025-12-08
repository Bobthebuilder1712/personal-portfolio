import React from 'react';
import { resumeData } from '../data/resumeData';
import './Certifications.css';

const Certifications = () => {
  return (
    <section id="certifications" className="certifications">
      <div className="certifications-container">
        <h2 className="section-title">Certifications & Courses</h2>
        <p className="section-subtitle">Professional development and continuous learning</p>
        
        <div className="certifications-grid">
          {resumeData.certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className="cert-header">
                <h3>{cert.title}</h3>
                <div className="cert-badge">✓</div>
              </div>
              
              <p className="cert-provider">{cert.provider}</p>
              <p className="cert-description">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
