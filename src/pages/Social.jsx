import React from 'react';
import '../styles/Social.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaExternalLinkAlt, FaComments } from 'react-icons/fa';

const Social = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      handle: 'muhammad-hassan-ashraf0086',
      subtitle: 'Professional updates, tech insights & networking',
      url: 'https://www.linkedin.com/in/muhammad-hassan-ashraf0086/',
      icon: <FaLinkedin />,
      colorClass: 'linkedin-card'
    },
    {
      name: 'GitHub',
      handle: 'Hassan0086',
      subtitle: 'Open-source repositories, AI pipelines & ERP modules',
      url: 'https://github.com/Hassan0086/ReMIND-Project',
      icon: <FaGithub />,
      colorClass: 'github-card'
    },
    {
      name: 'Email (Gmail)',
      handle: 'hassan.ashraf12@gmail.com',
      subtitle: 'Direct inquiries, collaboration & engineering consultation',
      url: 'mailto:hassan.ashraf12@gmail.com',
      icon: <FaEnvelope />,
      colorClass: 'email-card'
    }
  ];

  return (
    <section id="social" className="social">
      <div className="social-container">
        <div className="social-header">
          <p className="section-tag">SOCIAL</p>
          <h2 className="social-title">
            Let's Connect & <span>Collaborate.</span>
          </h2>
          <p className="social-description">
            I am always thrilled to connect with fellow software engineers, AI researchers, and
            innovators across the globe. Whether you want to discuss backend scalability, multimodal
            memory reconstruction, Odoo ERP architecture, or explore potential roles and freelance
            collaborations, my inbox and profiles are always open.
          </p>
        </div>

        <div className="social-grid">
          {socialLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              target={item.name.includes('Email') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className={`social-card ${item.colorClass}`}
              aria-label={`Visit Hassan's ${item.name}`}
            >
              <div className="social-icon-wrapper">{item.icon}</div>
              <div className="social-card-info">
                <h3>{item.name}</h3>
                <span className="social-handle">{item.handle}</span>
                <p className="social-card-sub">{item.subtitle}</p>
              </div>
              <div className="social-card-action">
                <span>Connect</span>
                <FaExternalLinkAlt className="action-icon" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Social;
