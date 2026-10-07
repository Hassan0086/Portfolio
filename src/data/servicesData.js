export const servicesData = [
  {
    id: 'backend-dev',
    title: 'Backend Development',
    category: 'Engineering',
    intro: 'Designing high-performance, fault-tolerant RESTful APIs, asynchronous services, and secure relational database architectures tailored for enterprise workloads.',
    fullDescription: 'I engineer robust server-side systems, high-concurrency microservices, and reliable database architectures using Python, FastAPI, and Flask. From schema optimization in PostgreSQL/MySQL to implementing authentication protocols (OAuth2/JWT) and asynchronous task processing, I build backends that scale cleanly under real-world traffic.',
    referenceUrl: 'https://en.wikipedia.org/wiki/Backend_(computing)',
    technologies: [
      { name: 'Python', url: 'https://www.python.org/' },
      { name: 'Flask', url: 'https://flask.palletsprojects.com/' },
      { name: 'FastAPI', url: 'https://fastapi.tiangolo.com/' },
      { name: 'MySQL', url: 'https://www.mysql.com/' },
      { name: 'PostgreSQL', url: 'https://www.postgresql.org/' }
    ],
    features: [
      'High-concurrency RESTful and asynchronous API endpoints',
      'Normalized relational schemas and query performance tuning',
      'Secure OAuth2 & JWT token authorization flows',
      'Integration with external third-party services and webhooks'
    ]
  },
  {
    id: 'ai-ml-eng',
    title: 'AI/ML Engineering',
    category: 'Machine Learning',
    intro: 'Developing mathematical and predictive models, training deep learning pipelines, and turning data into actionable intelligent predictions.',
    fullDescription: 'Leveraging foundational frameworks including PyTorch, NumPy, and Scikit-Learn, I develop data preprocessing pipelines, feature engineering systems, and deep neural models. I focus on bridging the gap between theoretical machine learning and production-ready inference engines.',
    referenceUrl: 'https://en.wikipedia.org/wiki/Machine_learning',
    technologies: [
      { name: 'PyTorch', url: 'https://pytorch.org/' },
      { name: 'NumPy', url: 'https://numpy.org/' },
      { name: 'Scikit-Learn', url: 'https://scikit-learn.org/' }
    ],
    features: [
      'Custom neural network training and transfer learning',
      'High-performance vectorized computations and data transformations',
      'Model evaluation, cross-validation, and metrics tracking',
      'Feature extraction, dimensionality reduction, and clustering'
    ]
  },
  {
    id: 'ai-skills-impl',
    title: 'AI Skills Implementation',
    category: 'Generative AI',
    intro: 'Implementing cutting-edge Generative AI workflows, RAG pipelines, LLM agentic orchestration, and multimodal speech and image pipelines.',
    fullDescription: 'Building intelligent agentic systems powered by Large Language Models (LLMs), Retrieval-Augmented Generation (RAG) with vector databases (like FAISS), Natural Language Processing (NLP), Speech-to-Text (STT), Text-to-Speech (TTS), and image processing models for automated content generation and memory reconstruction.',
    referenceUrl: 'https://en.wikipedia.org/wiki/Large_language_model',
    technologies: [
      { name: 'LLM', url: 'https://en.wikipedia.org/wiki/Large_language_model' },
      { name: 'RAG', url: 'https://en.wikipedia.org/wiki/Retrieval-augmented_generation' },
      { name: 'NLP', url: 'https://en.wikipedia.org/wiki/Natural_language_processing' },
      { name: 'STT', url: 'https://en.wikipedia.org/wiki/Speech_recognition' },
      { name: 'TTS', url: 'https://en.wikipedia.org/wiki/Speech_synthesis' },
      { name: 'Image Processing', url: 'https://en.wikipedia.org/wiki/Digital_image_processing' }
    ],
    features: [
      'Retrieval-Augmented Generation (RAG) with semantic vector search',
      'Autonomous LLM prompting, chaining, and conversational context memory',
      'Multimodal audio transcription (STT) and voice synthesis (TTS)',
      'Image enhancement and cognitive feature extraction'
    ]
  },
  {
    id: 'devops-infra',
    title: 'DevOps & CI/CD',
    category: 'Cloud & Infrastructure',
    intro: 'Automating continuous integration, multi-stage Docker containerization, and automated cloud deployments with zero-downtime reliability.',
    fullDescription: 'Automating software release cycles using Git, GitHub Actions, and containerized Docker environments. I establish automated linting, test suites, and continuous deployment webhooks to ensure every commit is verified and deployed reliably without manual intervention.',
    referenceUrl: 'https://en.wikipedia.org/wiki/DevOps',
    technologies: [
      { name: 'Git', url: 'https://git-scm.com/' },
      { name: 'GitHub', url: 'https://github.com/' },
      { name: 'Docker', url: 'https://www.docker.com/' },
      { name: 'CI/CD Pipelines', url: 'https://en.wikipedia.org/wiki/CI/CD' }
    ],
    features: [
      'Multi-stage Dockerfile builds optimizing image size and security',
      'GitHub Actions automated build, test, and release workflows',
      'Automated deployment triggers and webhook orchestrations',
      'Reproducible environment setups across local and cloud servers'
    ]
  },
  {
    id: 'frontend-dev',
    title: 'Frontend Development',
    category: 'User Interface',
    intro: 'Building responsive, high-performance web applications with modular component architectures, interactive animations, and modern UI/UX.',
    fullDescription: 'Creating clean, accessible, and reactive Single Page Applications (SPAs) using modern React, semantic HTML5, and responsive CSS3. Focused on high-speed rendering, state predictability, fluid user interactions, and cross-browser accessibility.',
    referenceUrl: 'https://en.wikipedia.org/wiki/Front-end_web_development',
    technologies: [
      { name: 'React', url: 'https://react.dev/' },
      { name: 'HTML5', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { name: 'CSS3', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' }
    ],
    features: [
      'Component-driven architecture using React Hooks and clean state',
      'Responsive design adapting gracefully from 320px mobile to 4K',
      'Aurora dark theme with glassmorphism, blur effects, and smooth transitions',
      'Semantic structure adhering to modern accessibility guidelines'
    ]
  },
  {
    id: 'odoo-erp',
    title: 'Odoo ERP Development',
    category: 'Enterprise Solutions',
    intro: 'Engineering tailored enterprise Odoo modules, business workflows, SQL view analytics dashboards, and automated scheduled actions.',
    fullDescription: 'Developing end-to-end business solutions on the Odoo ERP platform. I create customized data models, XML views (Kanban, Pivot, Graph, Form, Search), QWeb PDF reports, Excel XLSX export wizards, multi-company access security rules, and daily cron automated actions.',
    referenceUrl: 'https://en.wikipedia.org/wiki/Odoo',
    technologies: [
      { name: 'Odoo', url: 'https://www.odoo.com/' },
      { name: 'XML', url: 'https://www.w3.org/XML/' },
      { name: 'ERP', url: 'https://en.wikipedia.org/wiki/Enterprise_resource_planning' },
      { name: 'Modules', url: 'https://www.odoo.com/documentation/19.0/developer/tutorials/getting_started.html' }
    ],
    features: [
      'Custom Odoo 19 module architecture with ORM data models',
      'Real-time SQL view dashboards (pivot tables, bar & line charts)',
      'Automated cron jobs for scheduled checks and manager alerts',
      'QWeb PDF printable reports and formatted multi-criteria XLSX exports'
    ]
  }
];
