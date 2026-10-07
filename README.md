# Hassan's Portfolio ⚡

> Modern, responsive single-page developer portfolio with an **Aurora Dark Theme**, 3D interactive elements, and enterprise project showcases. Built for **Muhammad Hassan Ashraf**, Associate Software Engineer at Axiom World.

---

## 🌟 Live Demo & Local Preview

- **Local Preview Server:** `http://localhost:3000/`
- **Network URL:** `http://192.168.100.47:3000/`
- **Render Production (Upon Deployment):** Configure following the [Render Deployment Guide](#-deploy--host-on-render-with-cicd) below.

---

## 🎨 Design Philosophy: 70% Reference + 30% Original Work

This portfolio was designed adhering strictly to the **70% reference match + 30% original engineering** principle:

### 70% Reference Consistency (Visual Aesthetic & Core Layout)
- **Aurora Dark Theme**: Deep space backdrop (`#090b18` / `#060814`), neon cyan (`#61dafb`), electric purple (`#8b5cf6`), and soft pink accents.
- **Hovering 3D Glassmorphism Navbar**: Floating pill capsule fixed at the top with backdrop blur, subtle glow, glowing status dot, and responsive mobile drawer.
- **Interactive 3D Tilt Code Terminal**: Hero section terminal window with macOS traffic lights that calculates mouse distance and rotates in 3D perspective (`perspective(1200px)`).
- **Two-Column About Layout**: Personal narrative on the left, dual cards for Education and Interactive Interests tags on the right.
- **Featured Project Ribbon**: Angled `-45deg` gradient `FEATURED` ribbon banner spotlighting the Final Year Project (ReMIND).

### 30% Original Engineering & Custom Value-Adds
1. **Interactive Service Modals**:
   - Every service title/card is clickable, opening an in-depth capability modal with architecture diagrams, feature lists, and direct open-source references.
   - Clickable badges for every underlying technology leading directly to official/open-source documentation (e.g., [python.org](https://www.python.org/), [fastapi.tiangolo.com](https://fastapi.tiangolo.com/), [odoo.com](https://www.odoo.com/)).
   - "Request This Service" button inside the modal that auto-selects the radio button in the Contact section and smoothly navigates the user there.
2. **Production Odoo 19 ERP Showcase**:
   - Detailed showcase of the Odoo 19 Hostel Management Module alongside the ReMIND multimodal AI FYP, highlighting real-time SQL view dashboards, cron automations, QWeb reports, and multi-company security.
3. **Automated Contact Form to `hassan.ashraf12@gmail.com`**:
   - Zero-backend serverless form submission using Web3Forms / Formspree API directly to `hassan.ashraf12@gmail.com`.
   - Automatic 1-click fallback pre-filled mail client (`mailto:`) ensuring inquiries never fail even under offline/restricted networks.
   - Required fields: Email, Phone Number, Service Selection (radio grid), and Message.
4. **Active Section Scroll Tracking**:
   - Navbar dynamically highlights the section currently in viewport as the user scrolls.

---

## 🛠️ Tech Stack & Architecture

- **Core**: React 18, HTML5, Modern CSS3
- **Build Tool**: Vite (blazing fast builds and HMR)
- **Icons**: `react-icons` (FontAwesome 5 & 6)
- **Routing & State**: React Hooks (`useState`, `useEffect`, `useRef`), SPA section scrolling
- **Architecture**: Follows **SOLID principles**:
  - *Single Responsibility*: UI presentation separated from data files (`servicesData.js`, `projectsData.js`).
  - *Open/Closed*: New services and projects can be appended to data files without touching component layout code.
  - *Dependency Inversion*: Forms and modals receive actions and data via explicit props.

---

## 📂 Project Structure

```
portfolio/
├── .env                     # Environment variables (local)
├── .env.example             # Template for secrets and endpoints
├── .gitignore               # Ignored files (node_modules, build, etc.)
├── .github/
│   └── workflows/
│       ├── ci.yml           # Automated build and artifact upload on push
│       └── cd.yml           # Continuous deployment trigger for Render
├── index.html               # Main HTML entry with Google Fonts
├── package.json             # NPM package scripts and dependencies
├── vite.config.js           # Vite configuration (outDir: 'build', port: 3000)
├── README.md                # Project documentation and guide
└── src/
    ├── main.jsx             # React DOM root render
    ├── App.jsx              # Main SPA container & state orchestration
    ├── index.css            # Global CSS reset & Aurora CSS variables
    ├── data/
    │   ├── servicesData.js  # 6 Services, descriptions, open-source links
    │   └── projectsData.js  # ReMIND and Odoo module details
    ├── components/
    │   ├── Navbar.jsx       # 3D floating pill navigation + mobile menu
    │   ├── Navbar.css
    │   ├── ServiceModal.jsx # Detailed modal for service specs
    │   ├── ServiceModal.css
    │   ├── Footer.jsx       # Footer with back-to-top and copyright
    │   └── Footer.css
    ├── pages/
    │   ├── Home.jsx         # Hero section + 3D code card + stats
    │   ├── About.jsx        # Bio + Axiom World role + UCP education
    │   ├── Services.jsx     # Service cards with clickable tech links
    │   ├── Projects.jsx     # ReMIND FYP (Featured) & Odoo ERP module
    │   ├── Contact.jsx      # Form sending to hassan.ashraf12@gmail.com
    │   └── Social.jsx       # 3D interactive social connection cards
    └── styles/
        ├── Home.css
        ├── About.css
        ├── Services.css
        ├── Projects.css
        ├── Contact.css
        └── Social.css
```

---

## 🚀 Getting Started Locally

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
*(Optional: add your free [Web3Forms](https://web3forms.com) access key to enable zero-backend API email delivery).*

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for production
```bash
npm run build
```
Builds the static application to the `build/` directory.

### 6. Preview production build locally
```bash
npm run preview
```

---

## 📬 Contact Form: Best Free Connection to Email

The contact form is configured to send all submissions (Email, Phone, Selected Service, Message) to **`hassan.ashraf12@gmail.com`**.

### Recommended Free Methods:
1. **Web3Forms (Pre-configured in code)**:
   - Go to [web3forms.com](https://web3forms.com) and enter `hassan.ashraf12@gmail.com`.
   - You will immediately receive a free Access Key in your inbox.
   - Paste the key in your `.env`:
     ```env
     VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
     ```
   - All submissions will land directly in your Gmail inbox!
2. **Instant Pre-filled Mailto (Built-in Fallback)**:
   - If no API key is supplied or if network connection fails, the user is offered a 1-click button to open their mail client with all fields pre-populated addressed directly to `hassan.ashraf12@gmail.com`.

---

---

## 🌐 Deploy & Host on Vercel with CI/CD

### Step 1: Deploy on Vercel (1-Click Setup)

1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account (`Hassan0086`).
2. Click **Add New...** → **Project**.
3. Import your repository: **`Hassan0086/Portfolio`**.
4. Vercel automatically detects the configuration via `vercel.json`:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
5. Under **Environment Variables**, add:
   - `VITE_CONTACT_EMAIL` = `hassan.ashraf12@gmail.com`
   - `VITE_WEB3FORMS_ACCESS_KEY` = *(paste your key once generated in Step 3)*
6. Click **Deploy**. In ~30 seconds, your site is live at `https://portfolio-hassan0086.vercel.app` (or your assigned Vercel URL)!

---

### Step 2: Add Vercel Deploy Hook in `.env`

1. In your Vercel Project Dashboard, navigate to **Settings** → **Git**.
2. Scroll to the **Deploy Hooks** section.
3. Create a new hook:
   - **Hook Name:** `Portfolio Deploy Hook`
   - **Branch:** `main`
4. Click **Create Hook** and copy the generated webhook URL:
   `https://api.vercel.com/v1/integrations/deploy/prj_xxxxxx/xxxxxx`
5. Save this URL in your local `.env`:
   ```env
   VERCEL_DEPLOY_HOOK=https://api.vercel.com/v1/integrations/deploy/prj_xxxxxx/xxxxxx
   ```
6. *(Optional for GitHub Actions CI/CD)*: In your GitHub repo **Settings** → **Secrets and variables** → **Actions**, add a new secret `VERCEL_DEPLOY_HOOK` with this URL.

---

### Step 3: Register on Web3Forms with Your Vercel Website URL

1. Go to [web3forms.com](https://web3forms.com).
2. Enter your email: **`hassan.ashraf12@gmail.com`**.
3. Enter your deployed website URL: **`https://portfolio-hassan0086.vercel.app`** (or your exact Vercel domain).
4. Click **Create Access Key** / **Submit**.
5. Check your Gmail inbox (`hassan.ashraf12@gmail.com`) for the free Access Key (e.g. `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`).
6. Add the key in your local `.env`:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```
7. Also add `VITE_WEB3FORMS_ACCESS_KEY` in Vercel **Settings** → **Environment Variables** so production form submissions work seamlessly without any server.


---

## 👤 Author

**Muhammad Hassan Ashraf**  
Associate Software Engineer @ Axiom World  
- 📧 Email: [hassan.ashraf12@gmail.com](mailto:hassan.ashraf12@gmail.com)  
- 💼 LinkedIn: [muhammad-hassan-ashraf0086](https://www.linkedin.com/in/muhammad-hassan-ashraf0086/)  
- 🐙 GitHub: [Hassan0086](https://github.com/Hassan0086/ReMIND-Project)  

---

*Licensed under the MIT License.*
