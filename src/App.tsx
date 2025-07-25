import Navbar from './components/Navbar';
import Hero from './components/Hero';
import resumeFile from './assets/files/resume_gustavo_br.pdf';
import './App.css'

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
      <main className="main-content">
        <Hero
          heroName="Gustavo Montenegro"
          heroTitle="Data Analyst/Engineer | Full Stack Developer"
          location="João Pessoa, Brazil"
          email="gustavommchaves@hotmail.com"
          //linkedin="https://www.linkedin.com/in/your-profile"
          github="https://github.com/guga06436"
          resume={resumeFile} 
        />
        {/* Other sections like About, Projects, etc. go here */}
      </main>
    </>
  )
}

export default App
