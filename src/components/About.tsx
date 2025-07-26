import React from 'react';
import { FiDownload, FiCalendar, FiMapPin } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';
import { HiOutlineDocumentText } from 'react-icons/hi';
import './About.css';

interface AboutProps {
  introParagraph: string;
  education: {
    degree: string;
    university: string;
    dates: string;
    location: string;
  };
  resume: {
    link: string;
  };
  imageSrc: string;
}

const About: React.FC<AboutProps> = ({ introParagraph, education, resume, imageSrc }) => {
  return (
    <section id="about" className="about-section">
      <div className="about-image-container">
        <img src={imageSrc} alt="Developer portrait" className="about-image" />
      </div>

      <div className="about-content">
        <div className="about-intro">
          <h2 className="about-main-title">About Me</h2>
          <p className="about-intro-paragraph">{introParagraph}</p>
        </div>

        <div className="about-cards-grid">
          {/* Education Card */}
          <div className="info-column">
            <h3 className="column-title">
              <FaGraduationCap /> Education
            </h3>
            <div className="about-card education-card">
              <h4>{education.degree}</h4>
              <p className="university">{education.university}</p>
              <div className="card-footer">
                <span><FiCalendar /> {education.dates}</span>
                <span><FiMapPin /> {education.location}</span>
              </div>
            </div>
          </div>

          {/* Resume Card */}
          <div className="info-column">
              <h3 className="column-title">
                <HiOutlineDocumentText /> CV Resume
              </h3>
            <div className="about-card resume-card">
                <h4>Resume / CV</h4>
                <p>Download my professional resume</p>
                <a href={resume.link} className="download-btn" download>
                    <FiDownload /> Download
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
