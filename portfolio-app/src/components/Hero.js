import React from 'react';
import { resumeData } from '../data/resumeData';
<<<<<<< HEAD
import myphoto from '../assets/myphoto.jpg';
import './Hero.css';
import { FaLinkedin } from 'react-icons/fa';
import { SiGithub, SiHackerrank } from 'react-icons/si';
=======
import './Hero.css';
import { FaLinkedin } from 'react-icons/fa';
import { SiHackerrank } from 'react-icons/si';
>>>>>>> db6b3309e7b4e9812d843110d0555781a080866e
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
<<<<<<< HEAD
          <a href="#contact" className="btn btn-cta"><FiMail className="icon" />Get In Touch</a>
          <a href="/resume.pdf" download className="btn btn-cta"><FiDownload className="icon" />Download Resume</a>
=======
          <a href="#contact" className="btn btn-secondary"><FiMail className="icon" />Get In Touch</a>
          <a href="/resume.pdf" download className="btn btn-download"><FiDownload className="icon" />Download Resume</a>
>>>>>>> db6b3309e7b4e9812d843110d0555781a080866e
        </div>

        <div className="hero-social">
          <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin className="icon" />LinkedIn
          </a>
          <a href={resumeData.hackerrank} target="_blank" rel="noopener noreferrer" className="social-link">
            <SiHackerrank className="icon" />HackerRank
          </a>
          <a href={`mailto:${resumeData.email}`} className="social-link">
<<<<<<< HEAD
            <FiMail className="icon" />Emai
          </a>
          <a href={resumeData.Github} target="_blank" rel="noopener noreferrer" className="social-link">
            <SiGithub className="icon" />Github
=======
            <FiMail className="icon" />Email
>>>>>>> db6b3309e7b4e9812d843110d0555781a080866e
          </a>
        </div>
      </div>
      
      <div className="hero-animation">
        <div className="floating-box"></div>
        <div className="floating-box delay-1"></div>
        <div className="floating-box delay-2"></div>
<<<<<<< HEAD
        <div className="floating-box-delay-3"></div>
      </div>
              {/* RIGHT: photo card */}
        <div className="hero-right">
          <div className="photo-card">
            <div className="photo-accent" />
            <img src={myphoto} alt={resumeData.name} className="photo-img" />
          </div>
        </div>
=======
      </div>
>>>>>>> db6b3309e7b4e9812d843110d0555781a080866e
    </section>
  );
};

export default Hero;
