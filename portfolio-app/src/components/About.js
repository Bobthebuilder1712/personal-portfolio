import React from 'react';
import { resumeData } from '../data/resumeData';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">{resumeData.summary}</p>
            
            <div className="about-info">
              <div className="info-item">
                <h3>Location</h3>
                <p>{resumeData.location}</p>
              </div>
              <div className="info-item">
                <h3>Phone</h3>
                <p>{resumeData.phone}</p>
              </div>
              <div className="info-item">
                <h3>Email</h3>
                <p>
                  <a href={`mailto:${resumeData.email}`}>{resumeData.email}</a>
                </p>
              </div>
            </div>

            {/* Key highlights removed as requested */}
          </div>

          <div className="about-activities">
            <h3>Activities & Interests</h3>
            <ul className="activities-list">
              {resumeData.activities.map((activity, index) => (
                <li key={index} className="activity-item">
                  <span className="activity-icon">●</span>
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
