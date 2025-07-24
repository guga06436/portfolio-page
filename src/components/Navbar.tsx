import React, { useState } from 'react';
import './Navbar.css';

interface OptionItem {
  name: string;
  link: string;
}

interface NavbarProps {
  title: {
    text: string;
  };
  options: {
    items: OptionItem[];
  };
}

const Navbar: React.FC<NavbarProps> = ({ title, options }) => {
  // State to control the mobile menu's visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-fixed">
      {/* Title of the navbar */}
      <a href="/" className="navbar-title">
        {title.text}
      </a>

      {/* Hamburger menu button - only visible on mobile */}
      <button 
        className={`navbar-toggle ${isMenuOpen ? 'is-active' : ''}`} 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Menu list */}
      <ul className={`navbar-menu ${isMenuOpen ? 'is-active' : ''}`}>
        {options.items.map((item) => (
          <li key={item.name} className="navbar-item">
            <a href={item.link} className="navbar-link">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;