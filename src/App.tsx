import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import resumeFile from './assets/files/resume_gustavo_br.pdf';
import aboutImage from './assets/images/about.png';
import './App.css';

// Centralized data for the entire portfolio for easier management and readability
const portfolioData = {
  personalInfo: {
    name: "Gustavo Montenegro",
    title: "Data Analyst/Engineer | Full Stack Developer",
    location: "João Pessoa, Brazil",
    email: "gustavommchaves@hotmail.com",
    phone: "+55 (83) 98203-7615",
  },
  socialLinks: {
    github: "https://github.com/guga06436",
    linkedin: "https://www.linkedin.com/in/gustavo-montenegro-3a2089205",
  },
  about: {
    intro: "I build innovative, data-driven solutions by blending expertise in Data Engineering, Full Stack Development, and AI, specializing from automated data pipelines to scalable web applications.",
    education: {
      degree: 'Bachelor in Computer Science',
      university: 'Federal University of Paraíba (UFPB)',
      dates: 'Oct 2020 - Jul 2025',
      location: 'João Pessoa, Brazil',
    },
    image: aboutImage,
  },
  experiences: [
    {
      role: 'Solutions Development for Transparency and Government Automation',
      company: 'General Comptroller of the State of Paraíba (CGE-PB)',
      type: 'Internship',
      duration: 'October 2022 – July 2024',
      location: 'João Pessoa, PB, Brazil',
      description: [
        'Built BI dashboards (Metabase, Power BI) to track Fiscal Responsibility Law compliance.',
        'Implemented ETL pipelines with Pentaho, migrating data from ADABAS to PostgreSQL.',
        'Developed a containerized internal portal (Vue.js, Spring Boot) using MVC architecture.',
        'Automated accounting reports with Python, significantly reducing generation time and errors.',
        'Engineered a Python-based data migration system with API integration for a new application.',
        'Authored detailed documentation for SQL queries and dashboards to improve reusability.'
      ]
    },
    {
      role: 'Data Science in Institutional Research & Academic Engagement',
      company: 'PET - Tutorial Education Program (UFPB)',
      type: 'Internship',
      duration: 'October 2021 – June 2022',
      location: 'João Pessoa, PB, Brazil',
      description: [
        'Conducted statistical analysis on 15 years of institutional data and researched university internationalization processes, using Python (Pandas, NumPy) for data modeling.',
        'Automated data collection from institutional portals using web scraping techniques with Selenium and BeautifulSoup.',
        'Developed data visualizations (Matplotlib, Seaborn) to communicate research findings, contributing to a published book.',
        'Instructed and coordinated introductory Python programming courses for university students, focusing on logical reasoning.',
        'Organized scientific and technical events, such as the UFPB Computing Week, to promote knowledge sharing.'
      ]
    }
  ],
  menuItems: [
    { name: 'About Me', link: '#about' },
    { name: 'Technical Skills', link: '#skills' },
    { name: 'Experience', link: '#experience' },
    // { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '#contact' },
  ],
};

function App() {
  return (
    <>
      <Navbar
        title={{ text: 'Gustavo Montenegro | Portfolio' }}
        options={{ items: portfolioData.menuItems }}
      />
      
      <main className="page-container">
        <section id="hero" className="page-section">
          <Hero
            heroName={portfolioData.personalInfo.name}
            heroTitle={portfolioData.personalInfo.title}
            location={portfolioData.personalInfo.location}
            email={portfolioData.personalInfo.email}
            github={portfolioData.socialLinks.github}
            linkedin={portfolioData.socialLinks.linkedin}
            resume={resumeFile} 
          />
        </section>

        <section id="about" className="page-section">
          <About
            introParagraph={portfolioData.about.intro}
            education={portfolioData.about.education}
            resume={{ link: resumeFile }}
            imageSrc={portfolioData.about.image}
          />
        </section>

        <section id="skills" className="page-section">
          <Skills/>
        </section>

        <section id="experience" className="page-section">
          <Experience experiences={portfolioData.experiences} />
        </section>

        <section id="contact" className="page-section">
          <Contact
            email={portfolioData.personalInfo.email}
            phone={portfolioData.personalInfo.phone}
            location={portfolioData.personalInfo.location}
            linkedinUrl={portfolioData.socialLinks.linkedin}
            githubUrl={portfolioData.socialLinks.github}
          />
        </section>
      </main>
    </>
  );
}

export default App;
