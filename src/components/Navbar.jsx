import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'services', 'work', 'contact', 'social'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Work', id: 'work' },
    { label: 'Contact', id: 'contact' },
    { label: 'Social', id: 'social' }
  ];

  return (
    <header className="navbar-wrapper">
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div
          className="logo"
          onClick={() => scrollToSection('home')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && scrollToSection('home')}
          aria-label="Scroll to home"
        >
          <span className="logo-text">
            HASSAN's PORTFOLIO<span className="dot"></span>
          </span>
        </div>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link-btn ${activeSection === item.id ? 'active' : ''} ${
                item.id === 'contact' ? 'contact-pill' : ''
              }`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
