import React from 'react';
import './Skills.css';
import {
  FaPython, FaDocker, FaGitAlt, FaHtml5, FaReact, FaVuejs, FaUsers, FaClipboardList, FaGlobe, FaJava, FaFileAlt
} from 'react-icons/fa';
import { 
  SiPowers, SiSelenium, SiSpring, SiDjango, SiTensorflow, SiPytorch, SiScikitlearn, SiOpencv, 
  SiPandas, SiNumpy, SiMetabase, SiStreamlit 
} from 'react-icons/si';
import { GoDatabase } from 'react-icons/go';
import { AiOutlineRobot, AiOutlineFundView } from 'react-icons/ai';
import { BsKanban, BsBoxes } from 'react-icons/bs';
import { TbApi, TbBoxModel2 } from "react-icons/tb";
import { GrDocumentVerified } from "react-icons/gr";


// Helper component for individual skill tags
const SkillTag = ({ icon, name }: { icon: React.ReactNode, name: string }) => (
  <div className="skill-tag">
    {icon}
    <span>{name}</span>
  </div>
);

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Data Engineering & Analysis',
      icon: <GoDatabase />,
      skills: [
        { name: 'ETL', icon: <BsBoxes /> },
        { name: 'Data Modeling', icon: <TbBoxModel2 /> },
        { name: 'Web Scraping', icon: <SiSelenium /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'Pandas', icon: <SiPandas /> },
        { name: 'NumPy', icon: <SiNumpy /> },
        { name: 'SQL', icon: <GoDatabase /> },
        { name: 'Power BI', icon: <SiPowers /> },
        { name: 'Metabase', icon: <SiMetabase /> },
        { name: 'Streamlit', icon: <SiStreamlit /> },
      ],
    },
    {
      title: 'Full Stack Web Development',
      icon: <FaHtml5 />,
      skills: [
        { name: 'Spring Boot', icon: <SiSpring /> },
        { name: 'Java', icon: <FaJava /> },
        { name: 'Django', icon: <SiDjango /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'Vue.js', icon: <FaVuejs /> },
        { name: 'REST APIs', icon: <TbApi /> },
        { name: 'Docker', icon: <FaDocker /> },
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'HTML/CSS', icon: <FaHtml5 /> },
      ],
    },
    {
      title: 'Artificial Intelligence & ML',
      icon: <AiOutlineRobot />,
      skills: [
        { name: 'TensorFlow', icon: <SiTensorflow /> },
        { name: 'PyTorch', icon: <SiPytorch /> },
        { name: 'Scikit-Learn', icon: <SiScikitlearn /> },
        { name: 'OpenCV', icon: <SiOpencv /> },
        { name: 'YOLO', icon: <AiOutlineFundView /> },
      ],
    },
    {
      title: 'Methodologies & Best Practices',
      icon: <FaClipboardList />,
      skills: [
        { name: 'OOP', icon: <FaClipboardList /> },
        { name: 'SOLID', icon: <GrDocumentVerified /> },
        { name: 'Design Patterns', icon: <FaClipboardList /> },
        { name: 'Scrum', icon: <FaUsers /> },
        { name: 'Kanban', icon: <BsKanban /> },
        { name: 'Tech Docs', icon: <FaFileAlt /> },
      ],
    },
  ];

  const languages = [
    { name: 'Portuguese (Native)', icon: <FaGlobe /> },
    { name: 'English (Fluent)', icon: <FaGlobe /> },
    { name: 'Spanish (Intermediate)', icon: <FaGlobe /> },
    { name: 'Japanese (Beginner)', icon: <FaGlobe /> },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <h2 className="skills-main-title">Technical Skills</h2>
        <p className="skills-subtitle">
          An overview of my technical experience, covering data science, full-stack development, and AI/ML.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card">
            <h3 className="skill-card-title">
              {category.icon}
              {category.title}
            </h3>
            <div className="skill-tags-container">
              {category.skills.map((skill, skillIndex) => (
                <SkillTag key={skillIndex} name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        ))}
        {/* Languages card */}
        <div className="skill-card languages-card">
          <h3 className="skill-card-title">
            <FaGlobe />
            Languages
          </h3>
          <div className="skill-tags-container">
            {languages.map((lang, langIndex) => (
              <SkillTag key={langIndex} name={lang.name} icon={lang.icon} />
            ))}
          </div>
        </div>
      </div>

      <div className="skills-summary">
        <div className="summary-item">
          <span className="summary-number">20+</span>
          <span className="summary-text">Dev Tools & Libraries</span>
        </div>
        <div className="summary-item">
          <span className="summary-number">5+</span>
          <span className="summary-text">AI/ML Technologies</span>
        </div>
        <div className="summary-item">
          <span className="summary-number">4</span>
          <span className="summary-text">Languages</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;