import React, { useState } from 'react';
import { resumeData } from '../data/resumeData';
import './Contact.css';
import { FaLinkedin } from 'react-icons/fa';
import { SiHackerrank } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's discuss your next project or opportunity</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <a href={`mailto:${resumeData.email}`} className="contact-link">
                {resumeData.email}
              </a>
            </div>

            <div className="contact-item">
              <h3>Phone</h3>
              <a href={`tel:${resumeData.phone}`} className="contact-link">
                {resumeData.phone}
              </a>
            </div>

            <div className="contact-item">
              <h3>Location</h3>
              <p className="contact-text">{resumeData.location}</p>
            </div>

            <div className="contact-item">
              <h3>Connect With Me</h3>
              <div className="social-links">
                <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn"><FaLinkedin className="icon" />LinkedIn</a>
                <a href={resumeData.hackerrank} target="_blank" rel="noopener noreferrer" className="social-btn"><SiHackerrank className="icon" />HackerRank</a>
                <a href={`mailto:${resumeData.email}`} className="social-btn"><FiMail className="icon" />Email</a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              {submitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
