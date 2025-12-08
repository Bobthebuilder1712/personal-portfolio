import React from 'react';
import { resumeData } from '../data/resumeData';
import './Projects.css';
import { FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Showcasing my best work and technical expertise</p>
        
        <div className="projects-grid">
          {resumeData.projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className={`project-number`}>0{index + 1}</span>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                <h4>Technologies Used</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-highlights">
                <h4>Highlights</h4>
                <ul>
                  {project.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <button className="project-btn"><FiExternalLink className="icon" />Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
