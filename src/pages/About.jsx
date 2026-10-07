import React from 'react';
import '../styles/About.css';
import {
  FaServer,
  FaBrain,
  FaNetworkWired,
  FaCogs,
  FaMicrochip,
  FaDocker,
  FaBriefcase,
  FaGraduationCap
} from 'react-icons/fa';

const About = () => {
  const interests = [
    { icon: <FaServer />, label: 'Backend Engineering' },
    { icon: <FaBrain />, label: 'AI & Large Language Models' },
    { icon: <FaNetworkWired />, label: 'RAG Architectures' },
    { icon: <FaCogs />, label: 'Enterprise ERP & Odoo' },
    { icon: <FaMicrochip />, label: 'NLP & Speech Technologies' },
    { icon: <FaDocker />, label: 'Docker & DevOps' },
    { icon: <FaBrain />, label: 'Multimodal Reconstruction' }
  ];

  return (
    <section id="about" className="about">
      <div className="about-header">
        <p className="section-tag">ABOUT ME</p>
        <h2 className="about-title">
          Turning ideas into <span>impact.</span>
        </h2>
      </div>

      <div className="about-grid">
        <div className="about-left">
          <p className="about-text">
            I am a <strong>Computer Science graduate</strong> with a strong foundation in software
            engineering, backend development, and AI engineering, with hands-on experience building
            real-world applications using Python and modern technologies.
          </p>

          <p className="about-text">
            Currently working as an <strong>Associate Software Engineer at Axiom World</strong>, I
            contribute to the development and maintenance of Python-based enterprise applications
            while learning industry best practices in software architecture, ERP development,
            AI-driven automation, and scalable system design. I collaborate with experienced
            engineers to write clean, maintainable code, troubleshoot issues, and deliver reliable
            software solutions.
          </p>

          <p className="about-text">
            My core interests lie in backend engineering, AI engineering, automation, Large Language
            Models (LLMs), Natural Language Processing (NLP), and Retrieval-Augmented Generation
            (RAG). I enjoy building intelligent systems that combine modern AI with scalable backend
            architectures to solve real-world problems.
          </p>

          <p className="about-text highlight-box">
            One of my flagship projects is <strong>ReMIND</strong>, a multimodal, agentic AI-based
            memory reconstruction system designed to assist individuals with Alzheimer's and Dementia.
            The project integrates image processing, speech technologies, LLMs, Retrieval-Augmented
            Generation (RAG), and backend orchestration to generate meaningful, context-aware memory
            reconstruction.
          </p>

          <p className="about-text">
            I strongly believe in continuous learning, thorough research, and writing maintainable code
            that creates long-term value. I’m always open to connecting with professionals,
            collaborating on innovative projects, and learning from the broader software engineering
            and AI community.
          </p>
        </div>

        <div className="about-right">
          <div className="info-card">
            <div className="info-card-header">
              <FaBriefcase className="card-header-icon" />
              <h3>Current Position</h3>
            </div>
            <div className="info-item">
              <div>
                <h4>Associate Software Engineer</h4>
                <p className="institution">Axiom World</p>
                <p className="period">Python Backend • Enterprise ERP • Scalable System Design</p>
              </div>
            </div>
          </div>

          <div className="info-card">
            <div className="info-card-header">
              <FaGraduationCap className="card-header-icon" />
              <h3>Education</h3>
            </div>
            <div className="info-item">
              <div>
                <h4>Bachelor of Computer Science (BSCS)</h4>
                <p className="institution">University of Central Punjab (UCP), Lahore</p>
                <p className="period">Solid Foundation in Software Engineering & AI</p>
              </div>
            </div>
          </div>

          <div className="info-card">
            <div className="info-card-header">
              <FaBrain className="card-header-icon" />
              <h3>Core Interests</h3>
            </div>
            <div className="interest-list">
              {interests.map((interest, idx) => (
                <span key={idx} className="interest-tag">
                  {interest.icon} {interest.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
