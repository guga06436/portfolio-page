import Navbar from './components/Navbar';
import Hero from './components/Hero';
import resumeFile from './assets/files/resume_gustavo_br.pdf';
import './App.css'
import About from './components/About';

function App() {

  const menuItems = [
    { name: 'About Me', link: '#about' },
    { name: 'Technical Skills', link: '#skills' },
    { name: 'Experience', link: '#experience' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contacts', link: '#Contacts' },
  ];

  return (
    <>
      <Navbar
        title={{ text: 'Gustavo Montenegro | Portfolio' }}
        options={{ items: menuItems }}
      />
      <main className="main-content scroll-container">
        <section id="hero" className="scroll-section">
          <Hero
            heroName="Gustavo Montenegro"
            heroTitle="Data Analyst/Engineer | Full Stack Developer"
            location="João Pessoa, Brazil"
            email="gustavommchaves@hotmail.com"
            github="https://github.com/guga06436"
            resume={resumeFile} 
          />
        </section>
        <section id="about" className="scroll-section">
          <About
            introParagraph="I build innovative, data-driven solutions by blending expertise in Data Engineering, Full Stack Development, and AI, specializing from automated data pipelines to scalable web applications."
            education={{
              degree: 'Bachelor in Computer Science',
              university: 'Federal University of Paraíba (UFPB)',
              dates: 'Oct 2020 - Jul 2025',
              location: 'João Pessoa, Brazil',
            }}
            resume={{
              link: resumeFile
            }}
          />
        </section>
      </main>
    </>
  )
}

export default App