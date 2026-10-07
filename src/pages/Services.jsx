import React, { useState } from 'react';
import '../styles/Services.css';
import { servicesData } from '../data/servicesData';
import ServiceModal from '../components/ServiceModal';
import {
  FaServer,
  FaBrain,
  FaRobot,
  FaCloud,
  FaCode,
  FaCogs,
  FaExternalLinkAlt,
  FaArrowRight
} from 'react-icons/fa';

const iconMap = {
  'backend-dev': <FaServer />,
  'ai-ml-eng': <FaBrain />,
  'ai-skills-impl': <FaRobot />,
  'devops-infra': <FaCloud />,
  'frontend-dev': <FaCode />,
  'odoo-erp': <FaCogs />
};

const Services = ({ onSelectService }) => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="services">
      <div className="services-header">
        <p className="section-tag">SERVICES</p>
        <h2 className="services-title">
          What I can <span>build.</span>
        </h2>
        <p className="services-subtitle">
          I build scalable software solutions that combine modern backend architectures,
          intelligent AI systems, enterprise ERP modules, and reliable deployment.
        </p>
      </div>

      <div className="services-grid">
        {servicesData.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-card-top">
              <div className="service-icon">{iconMap[service.id]}</div>
              <span className="service-category-tag">{service.category}</span>
            </div>

            <h3
              className="service-name-clickable"
              onClick={() => setSelectedService(service)}
              title="Click to view detailed specs & architecture"
            >
              {service.title}
            </h3>

            <p className="service-intro">{service.intro}</p>

            <div className="service-tech-section">
              <span className="tech-label">Technologies & Frameworks:</span>
              <div className="service-tech-list">
                {service.technologies.map((tech, idx) => (
                  <a
                    key={idx}
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-tech-link"
                    title={`Visit official ${tech.name} documentation`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>{tech.name}</span>
                    <FaExternalLinkAlt className="mini-icon" />
                  </a>
                ))}
              </div>
            </div>

            <div className="service-card-footer">
              <button
                className="view-details-btn"
                onClick={() => setSelectedService(service)}
              >
                <span>Explore Service Details</span>
                <FaArrowRight className="arrow-icon" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onSelectService={onSelectService}
        />
      )}
    </section>
  );
};

export default Services;
