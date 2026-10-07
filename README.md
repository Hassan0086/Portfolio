# Muhammad Hassan Ashraf — Portfolio

My personal portfolio as Associate Software Engineer at Axiom World, focused on backend engineering, AI/ML, enterprise ERP development, and modern web applications.

The portfolio is a responsive React single-page application designed to present my professional profile, engineering capabilities, selected projects, and contact channels through a focused, interactive interface.

## Live Portfolio

**Website:** https://portfolio-hassan-zeta.vercel.app/

**Repository:** https://github.com/Hassan0086/Portfolio

## Overview

This portfolio is built around a simple principle: the interface should communicate engineering capability without turning the portfolio itself into an unnecessarily complex application.

It combines:

- A responsive single-page React architecture
- A dark Aurora-inspired visual system
- Interactive 3D UI elements and transitions
- Data-driven service and project sections
- Detailed service capability modals
- Direct links to technology documentation
- A production-oriented contact workflow
- Responsive layouts for desktop, tablet, and mobile
- Vercel deployment configuration
- Environment-based configuration for external form services

The implementation keeps presentation, content data, and application state separated where practical, allowing services and projects to be maintained independently from their UI components.

## Engineering Focus

The portfolio represents the areas in which I currently work and build:

### Backend Engineering
- Python-based backend systems
- RESTful API development
- FastAPI and Flask
- PostgreSQL and MySQL
- Authentication with OAuth2 and JWT
- Third-party integrations and webhooks
- Relational data modelling and query optimisation

### AI/ML Engineering
- Machine learning workflows
- PyTorch, NumPy, and Scikit-Learn
- Model training and evaluation
- Feature engineering and data processing
- Neural-network and transfer-learning workflows

### Generative AI & Intelligent Systems
- Large Language Models
- Retrieval-Augmented Generation (RAG)
- Vector search with FAISS
- Natural Language Processing
- Speech-to-Text and Text-to-Speech
- Multimodal AI pipelines
- Image processing and enhancement

### Enterprise ERP & Odoo
- Odoo module development
- Python ORM and business models
- XML views and business workflows
- SQL view-based analytics
- Automated scheduled actions
- Server actions
- QWeb PDF reporting
- XLSX reporting and export workflows
- Access rights and multi-company security

### DevOps & Delivery
- Git and GitHub
- GitHub Actions
- Docker-based workflows
- CI/CD concepts
- Deployment automation
- Vercel deployment configuration

### Frontend Engineering
- React
- JavaScript
- HTML5
- CSS3
- Responsive UI development
- Component-driven architecture
- Interactive interfaces and client-side state management

## Selected Work

### ReMIND — Final Year Project

**Generative AI Based Memory Rebuilder**

ReMIND is a multimodal AI application developed as a Final Year Project to reconstruct fragmented memories using text, images, and voice input. The system combines AI models, speech technologies, image processing, retrieval-based techniques, and backend orchestration to generate contextual memory narratives.

**Technologies:** React, FastAPI, Groq, LLMs, RAG, FAISS, PostgreSQL, Neon, OAuth2, JWT, Real-ESRGAN, GFPGAN, BLIP, ElevenLabs, gTTS, Docker, CI/CD

**Source:** https://github.com/Hassan0086/ReMIND-Project

### Odoo 19 Hostel Management Module

An enterprise-oriented Odoo 19 module covering hostel, room, student, admission, discharge, transfer, and complaint workflows.

The implementation includes SQL view-based analytics, automated scheduled actions, server actions, QWeb PDF reports, XLSX export workflows, and multi-company security isolation.

**Technologies:** Odoo 19, Python, PostgreSQL, XML, QWeb, SCSS, XlsxWriter, wkhtmltopdf, Git

**Source:** https://github.com/Hassan0086/Odoo-Module-Hostel-Management

## Application Architecture

The project uses a lightweight React architecture appropriate for a portfolio application.

### Core Structure

- `App.jsx` — application composition and shared service-selection state
- `components/` — reusable interface components such as navigation, service modals, and footer
- `pages/` — primary portfolio sections
- `data/` — structured service and project content
- `styles/` — section-specific styling
- `index.css` — global styles and shared visual foundations
- `vite.config.js` — Vite development and build configuration
- `vercel.json` — Vercel build and SPA rewrite configuration

### Design Principles

The implementation follows practical software engineering principles rather than introducing abstractions solely for abstraction's sake:

- **Separation of concerns:** service and project content are maintained in dedicated data modules instead of being embedded throughout presentation components.
- **Component reuse:** navigation, service details, and footer behaviour are isolated into focused components.
- **Explicit state flow:** shared service selection is passed through the application where it is required instead of introducing unnecessary global state.
- **Data-driven rendering:** services and projects are rendered from structured definitions, making content changes predictable and localised.
- **Progressive fallback:** the contact workflow provides a direct email fallback when the external form service is unavailable or not configured.
- **Responsive behaviour:** layout and interaction rules adapt across desktop, tablet, and mobile screen sizes.

## Technology Stack

| Area | Technologies |
| --- | --- |
| UI | React 18, HTML5, CSS3 |
| Build | Vite |
| Language | JavaScript / JSX |
| Icons | React Icons |
| State | React Hooks |
| Backend/API Integration | Web3Forms |
| Deployment | Vercel |
| Automation | GitHub Actions |
| Version Control | Git / GitHub |

## Contact

I am open to professional conversations, engineering collaborations, software projects, and opportunities related to backend development, AI/ML, enterprise Odoo development, and related engineering work.

- **Email:** hassan.ashraf12@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/muhammad-hassan-ashraf0086/
- **GitHub:** https://github.com/Hassan0086

## License

This project is intended to be released under the **MIT License**.

MIT License: https://opensource.org/license/mit/

If the repository does not yet contain a `LICENSE` file, the standard MIT license text should be added as `LICENSE` at the repository root to make the license explicit in the repository itself.
