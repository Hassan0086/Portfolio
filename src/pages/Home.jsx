import React, { useEffect, useRef } from 'react';
import '../styles/Home.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Home = () => {
  const cardRef = useRef(null);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateY = ((x - centerX) / centerX) * 10;
      const rotateX = ((centerY - y) / centerY) * 10;

      card.style.transform = `
        perspective(1200px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale3d(1.02, 1.02, 1.02)
      `;
    };

    const reset = () => {
      card.style.transform = `
        perspective(1200px)
        rotateX(0deg)
        rotateY(0deg)
        scale3d(1, 1, 1)
      `;
    };

    card.addEventListener('mousemove', handleMove);
    card.addEventListener('mouseleave', reset);

    return () => {
      card.removeEventListener('mousemove', handleMove);
      card.removeEventListener('mouseleave', reset);
    };
  }, []);

  return (
    <section id="home" className="home">
      <div className="background-grid"></div>
      <div className="background-blob blob1"></div>
      <div className="background-blob blob2"></div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="availability">
            <span className="status-dot"></span>
            Available for Roles & Engineering Collaborations
          </div>

          <p className="hero-greeting">Hello, I'm</p>

          <h1 className="hero-title">
            Muhammad Hassan <span>Ashraf</span>
          </h1>

          <h2 className="hero-subtitle">
            Associate Software Engineer <span className="subtitle-at">@</span> Axiom World
          </h2>

          <p className="hero-description">
            I am a Computer Science graduate with a strong foundation in software engineering,
            backend development, and AI engineering, with hands-on experience building real-world
            applications using Python and modern technologies.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => scrollToSection('work')}>
              Explore My Work
            </button>
            <button className="secondary-btn" onClick={() => scrollToSection('contact')}>
              Let's Connect
            </button>
          </div>

          <div className="hero-socials">
            <a
              href="https://www.linkedin.com/in/muhammad-hassan-ashraf0086/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hassan's LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Hassan0086/ReMIND-Project"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hassan's GitHub"
            >
              <FaGithub />
            </a>
            <a href="mailto:hassan.ashraf12@gmail.com" aria-label="Email Hassan">
              <FaEnvelope />
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <h3>Enterprise</h3>
              <p>Axiom World Experience</p>
            </div>
            <div className="divider"></div>
            <div>
              <h3>ReMIND</h3>
              <p>Multimodal AI FYP</p>
            </div>
            <div className="divider"></div>
            <div>
              <h3>Odoo 19</h3>
              <p>Custom ERP Solutions</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glow-circle"></div>
          <div className="code-card-wrapper">
            <div ref={cardRef} className="code-card">
              <div className="window-header">
                <div className="window-buttons">
                  <span className="red"></span>
                  <span className="yellow"></span>
                  <span className="green"></span>
                </div>
                <div className="window-title">engineer.py</div>
              </div>

              <div className="code-content">
                <p>
                  <span className="keyword">class</span>{' '}
                  <span className="className">SoftwareEngineer</span>:
                </p>
                <p className="indent">
                  <span className="keyword">def</span> <span className="function">__init__</span>(self):
                </p>
                <p className="indent double">
                  self.name = <span className="string">"Muhammad Hassan Ashraf"</span>
                </p>
                <p className="indent double">
                  self.role = <span className="string">"Associate Software Engineer"</span>
                </p>
                <p className="indent double">
                  self.company = <span className="string">"Axiom World"</span>
                </p>
                <p className="indent double">
                  self.backend = [<span className="string">"Python"</span>,{' '}
                  <span className="string">"FastAPI"</span>, <span className="string">"Flask"</span>,{' '}
                  <span className="string">"PostgreSQL"</span>]
                </p>
                <p className="indent double">
                  self.ai_ml = [<span className="string">"LLMs"</span>,{' '}
                  <span className="string">"RAG"</span>, <span className="string">"PyTorch"</span>,{' '}
                  <span className="string">"NLP"</span>]
                </p>
                <p className="indent double">
                  self.erp = [<span className="string">"Odoo 19"</span>,{' '}
                  <span className="string">"Automations"</span>, <span className="string">"SQL Views"</span>]
                </p>
                <p className="indent">
                  <span className="keyword">def</span> <span className="function">build_future</span>(self):
                </p>
                <p className="indent double">
                  <span className="keyword">return</span>{' '}
                  <span className="string">"Impactful Software & AI Solutions"</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
