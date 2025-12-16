import React, { useState, useEffect } from 'react';
import './Header.css';
import { FiSun, FiMoon } from 'react-icons/fi';

const Header = ({ activeSection, setActiveSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  // Use cookie-based persistence for theme preference instead of localStorage.
  const getCookie = (name) => {
    if (typeof document === 'undefined') return null;
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
  };

  const setCookie = (name, value, days = 365) => {
    if (typeof document === 'undefined') return;
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + d.toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)};${expires};path=/`;
  };

  const [theme, setTheme] = useState(() => {
    try {
      return getCookie('theme') || 'light';
    } catch (e) {
      return 'light';
    }
  });

  // small state to trigger rotation animation
  const [rotating, setRotating] = useState(false);

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme);
      setCookie('theme', theme);
    } catch (e) {
      // ignore
    }
  }, [theme]);

  const toggleTheme = () => {
    setRotating(true);
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    // stop rotating after animation time
    setTimeout(() => setRotating(false), 600);
  };

  const scrollToSection = (sectionId) => {
    setMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
<<<<<<< HEAD
          <h1>My portfolio</h1>
=======
          <h1>Bobby Dev</h1>
>>>>>>> db6b3309e7b4e9812d843110d0555781a080866e
        </div>

        <div className="header-actions">
          <button
            className={`theme-toggle ${rotating ? 'rotating' : ''}`}
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            title={theme === 'light' ? 'Dark mode' : 'Light mode'}
          >
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </button>

          <button 
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => scrollToSection('hero')}>Home</a>
          <a href="#about" onClick={() => scrollToSection('about')}>About</a>
          <a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a>
          <a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a>
          <a href="#experience" onClick={() => scrollToSection('experience')}>Experience</a>
          <a href="#education" onClick={() => scrollToSection('education')}>Education</a>
          <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
