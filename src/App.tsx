import Navbar from './components/Navbar';
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
    </>
  )
}

export default App
