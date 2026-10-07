import React, { useEffect } from 'react';
import './ServiceModal.css';
import { FaTimes, FaExternalLinkAlt, FaCheckCircle, FaPaperPlane } from 'react-icons/fa';

const ServiceModal = ({ service, onClose, onSelectService }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!service) return null;

  const handleRequestService = () => {
    if (onSelectService) {
      onSelectService(service.title);
    }
    onClose();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close dialog">
          <FaTimes />
        </button>

        <div className="modal-header">
          <span className="modal-category">{service.category}</span>
          <h2 className="modal-title">{service.title}</h2>
          <p className="modal-intro">{service.intro}</p>
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <h3>Overview & Engineering Capabilities</h3>
            <p className="modal-description">{service.fullDescription}</p>
          </div>

          <div className="modal-section">
            <h3>Key Highlights</h3>
            <ul className="modal-features-list">
              {service.features.map((feature, idx) => (
                <li key={idx}>
                  <FaCheckCircle className="check-icon" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-section">
            <h3>Underlying Technologies & Documentation</h3>
            <div className="modal-tech-links">
              {service.technologies.map((tech, idx) => (
                <a
                  key={idx}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-tech-pill"
                  title={`Visit official ${tech.name} documentation`}
                >
                  <span>{tech.name}</span>
                  <FaExternalLinkAlt className="ext-icon" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <a
            href={service.referenceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ref-article-btn"
          >
            <FaExternalLinkAlt />
            Read Reference Article
          </a>
          <button className="request-service-btn" onClick={handleRequestService}>
            <FaPaperPlane />
            Request This Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
