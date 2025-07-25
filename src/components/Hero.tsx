import React from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMapPin, FiMail, FiDownload } from 'react-icons/fi';

// 1. Define the interface for the component's props
interface HeroProps {
  heroName: string;
  heroTitle: string;
  location: string;
  email: string;
  linkedin?: string; // Optional prop
  github?: string;   // Optional prop
  resume?: string;   // Optional prop
}

// 2. Use the interface and destructure the props
const Hero: React.FC<HeroProps> = ({
  heroName,
  heroTitle,
  location,
  email,
  linkedin,
  github,
  resume,
}) => {
  return (
    <section className="hero-section">
      <div className="hero-box">
        {/* Use props for dynamic content */}
        <h1 className="hero-name">{heroName}</h1>
        <p className="hero-title">{heroTitle}</p>

        <div className="contact-info">
          <span className="contact-item">
            <FiMapPin size={16} />
            {location}
          </span>
          <span className="contact-item">
            <FiMail size={16} />
            {email}
          </span>
        </div>

        <div className="action-buttons">
          {/* 3. Conditionally render optional items */}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="social-button">
              <FaLinkedin size={20} />
            </a>
          )}

          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="social-button">
              <FaGithub size={20} />
            </a>
          )}

          {resume && (
            <a href={resume} download className="resume-button">
              <FiDownload size={18} />
              Download Resume
            </a>
          )}
        </div>
      </div>

      <div className="scroll-down-indicator">
        <div className="mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;