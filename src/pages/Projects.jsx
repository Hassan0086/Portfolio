import React from 'react';
import '../styles/Projects.css';
import { projectsData } from '../data/projectsData';
import { FaGithub, FaExternalLinkAlt, FaPlay, FaBuilding } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="work" className="projects">
      <div className="projects-header">
        <p className="section-tag">SELECTED WORK</p>
        <h2 className="projects-title">
          Things I've <span>Built.</span>
        </h2>
        <p className="projects-subtitle">
          Featured engineering projects highlighting multimodal AI systems, scalable backend
          orchestration, and enterprise ERP solutions.
        </p>
      </div>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className={`project-card ${project.featured ? 'featured' : ''}`}
          >
            {project.featured && <div className="featured-ribbon">FEATURED</div>}

            <div className="project-content">
              <div className="project-top-meta">
                <h2>{project.title}</h2>
                <h3>{project.subtitle}</h3>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-btn"
                >
                  <FaGithub />
                  <span>View Source</span>
                </a>

                {project.demoVideo && (
                  <a
                    href={project.demoVideo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visit-btn"
                  >
                    <FaPlay className="play-icon" />
                    <span>Watch Demo</span>
                  </a>
                )}

                {!project.featured && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="docs-btn"
                  >
                    <FaExternalLinkAlt />
                    <span>Module Specs</span>
                  </a>
                )}
              </div>

              {project.unavailable && (
                <p className="domain-warning">
                  Domain is unavailable for now. Please Visit{' '}
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <strong>GitHub</strong>
                  </a>{' '}
                  or{' '}
                  <a
                    href="https://www.linkedin.com/in/muhammad-hassan-ashraf0086/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <strong>LinkedIn</strong>
                  </a>{' '}
                  for more information.
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
