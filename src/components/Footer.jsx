import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-glow"></div>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-logo" onClick={scrollToTop}>
              HASSAN's PORTFOLIO<span className="dot"></span>
            </h3>
            <p className="footer-tagline">
              Associate Software Engineer at Axiom World. Crafting scalable backends, multimodal AI
              systems, and robust enterprise software solutions.
            </p>
          </div>

          <div className="footer-nav">
            <h4>Navigation</h4>
            <div className="footer-links">
              <button onClick={() => scrollToSection('home')}>Home</button>
              <button onClick={() => scrollToSection('about')}>About</button>
              <button onClick={() => scrollToSection('services')}>Services</button>
              <button onClick={() => scrollToSection('work')}>Work</button>
              <button onClick={() => scrollToSection('contact')}>Contact</button>
              <button onClick={() => scrollToSection('social')}>Social</button>
            </div>
          </div>

          <div className="footer-socials">
            <h4>Connect</h4>
            <div className="footer-social-icons">
              <a
                href="https://www.linkedin.com/in/muhammad-hassan-ashraf0086/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="footer-icon-btn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Hassan0086/ReMIND-Project"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="footer-icon-btn"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:hassan.ashraf12@gmail.com"
                aria-label="Email Hassan"
                className="footer-icon-btn"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Muhammad Hassan Ashraf. Built with{' '}
            <FaHeart className="heart-icon" /> using React & Aurora Design.
          </p>

          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <span>Back to Top</span>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
