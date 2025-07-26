import React from 'react';
import { FaBriefcase, FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

// Define the type for a single experience item, which will be passed in props
export interface ExperienceItemProps {
  role: string;
  company: string;
  type: string;
  duration: string;
  location: string;
  description: string[];
}

// Define the props for the main Experience component
interface ExperienceProps {
  experiences: ExperienceItemProps[];
}

// Helper component for the tag (Full-time/Internship)
const JobTypeTag: React.FC<{ type: 'Full-time' | 'Internship' }> = ({ type }) => (
  <span className={`job-type-tag ${type.toLowerCase()}`}>{type}</span>
);

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-header">
        <h2 className="experience-main-title">Experience</h2>
        <p className="experience-subtitle">
          My professional journey through various roles in software development, data analysis, and technical leadership.
        </p>
      </div>

      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-item-header">
              <h3 className="item-role">
                <FaBriefcase className="role-icon" /> {exp.role}
              </h3>
              <JobTypeTag type={exp.type === 'Internship' ? 'Internship' : 'Full-time'} />
            </div>
            <div className="item-company">
              <FaBuilding className="company-icon" />
              <a href="#" target="_blank" rel="noopener noreferrer">{exp.company}</a>
            </div>
            <div className="item-meta">
              <span><FaCalendarAlt /> {exp.duration}</span>
              <span><FaMapMarkerAlt /> {exp.location}</span>
            </div>
            <ul className="item-description">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;