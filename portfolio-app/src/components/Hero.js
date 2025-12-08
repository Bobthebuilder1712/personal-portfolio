import React from 'react';
import { resumeData } from '../data/resumeData';
import './Hero.css';
import { FaLinkedin } from 'react-icons/fa';
import { SiHackerrank } from 'react-icons/si';
import { FiMail, FiDownload } from 'react-icons/fi';
import { FaFolderOpen } from 'react-icons/fa';

const Hero = ({ setActiveSection }) => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm {resumeData.name}</h1>
        <p className="hero-subtitle">Front End Web Developer</p>
        <p className="hero-description">{resumeData.summary}</p>
        
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-cta"><FaFolderOpen className="icon" />View My Work</a>
          <a href="#contact" className="btn btn-secondary"><FiMail className="icon" />Get In Touch</a>
          <a href="/resume.pdf" download className="btn btn-download"><FiDownload className="icon" />Download Resume</a>
        </div>

        <div className="hero-social">
          <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin className="icon" />LinkedIn
          </a>
          <a href={resumeData.hackerrank} target="_blank" rel="noopener noreferrer" className="social-link">
            <SiHackerrank className="icon" />HackerRank
          </a>
          <a href={`mailto:${resumeData.email}`} className="social-link">
            <FiMail className="icon" />Email
          </a>
        </div>
      </div>
      
      <div className="hero-animation">
        <div className="floating-box"></div>
        <div className="floating-box delay-1"></div>
        <div className="floating-box delay-2"></div>
      </div>
    </section>
  );
};

export default Hero;
