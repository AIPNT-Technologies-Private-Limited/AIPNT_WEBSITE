# AI PNT Technologies — Official Web Platform

<div align="center">

![AIPNT Logo](forntend/public/assets/logo.png)

**Building the Intelligence Layer for a Digital India**

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

[Website](https://www.aipnt.in) • [About AIPNT](#about-aipnt) • [Ecosystem & Products](#core-ecosystem--products) • [Architecture](#architecture) • [Getting Started](#getting-started) • [Deployment](#deployment)

</div>

---

## 📌 Overview

**AI PNT Technologies Private Limited** engineers cutting-edge artificial intelligence systems, digital ecosystems, and intelligent hardware for Education, Healthcare, Public Governance, and Enterprise sectors. Incubated at **Silicon University, Bhubaneswar**, AIPNT bridges the gap between deep-tech AI research and grassroots real-world deployment across India.

This repository houses the full web platform for AI PNT Technologies, featuring an interactive, responsive Next.js frontend web application and a dedicated Node.js/Express backend service.

---

## 🌟 Core Ecosystem & Products

| Product / Solution | Domain | Description |
| :--- | :--- | :--- |
| **Prarambh** | EduTech | Interactive next-generation coding & problem-solving platform designed for schools, colleges, and young innovators. |
| **DigiSwasth** | MedTech | Connected healthcare AI platform powering clinical triage, diagnostic assistance, and tele-health infrastructure. |
| **ATAT** | EduTech / AI | AI Teacher Assistant Tool for automated grading, curriculum personalization, and real-time student analytics. |
| **Enterprise AI** | Enterprise | Custom machine learning pipelines, NLP intelligence, and business workflow automation. |
| **Digital Governance** | DigiTech / Govt | AI-driven public service delivery, grievance redressal, and administrative automation systems. |
| **School STEM & Robotics** | Education | NEP 2020-aligned experiential robotics, IoT, and AI laboratories for K-12 schools. |
| **Summer Internship Program** | Skilling | Hands-on industry internship tracks in AI/ML, IoT Hardware, Software Engineering, and MedTech at Bhubaneswar. |
| **IoT & Robotics Store** | Hardware | AIPNT-engineered microcontrollers, sensor kits, and robotics kits for learners and developers. |

---

## 🏗️ Architecture & Directory Structure

```text
AiPNT Site/
├── forntend/                  # Next.js 14 web application (App Router)
│   ├── app/                   # App Router pages and layouts
│   │   ├── about/             # About AI PNT Technologies
│   │   ├── atat/              # ATAT AI Teacher Assistant product page
│   │   ├── blog/              # Thought leadership & tech articles
│   │   ├── components/        # Reusable UI widgets & diagrams
│   │   │   ├── AiCoreDiagram.js       # Interactive AI architecture visualizer
│   │   │   ├── IndiaMapSVG.js         # Interactive national deployment map
│   │   │   ├── InternshipPopup.js     # Summer internship application modal
│   │   │   ├── RegionalDeploymentHub.js
│   │   │   └── Navbar.js / Footer.js
│   │   ├── corporate-training/# Corporate AI skilling solutions
│   │   ├── digiswasth/        # DigiSwasth healthcare AI platform
│   │   ├── edutech/           # EduTech solutions portal
│   │   ├── enterprise-ai/     # Enterprise AI solutions portal
│   │   ├── government/        # Government & public administration AI
│   │   ├── medtech/           # Medical technology & diagnostics
│   │   ├── our-products/      # Product portfolio overview
│   │   ├── prarambh/          # Prarambh coding platform showcase
│   │   ├── school-stem/       # K-12 STEM & robotics lab offerings
│   │   ├── shop/              # IoT & robotics hardware catalog
│   │   ├── summer-internship/ # University internship registration & details
│   │   ├── layout.js          # Root layout with SEO metadata & OpenGraph
│   │   ├── page.js            # Main landing page
│   │   ├── globals.css        # Global CSS variables, reset & styling tokens
│   │   └── home.css           # Landing page animations & layouts
│   ├── public/                # Static assets, branding, diagrams, media
│   ├── Dockerfile             # Multi-stage optimized standalone Dockerfile
│   ├── docker-compose.yml     # Container orchestration
│   ├── next.config.mjs        # Next.js configuration (standalone mode)
│   ├── package.json           # Frontend dependencies & scripts
│   └── README.md              # Dedicated frontend documentation
│
├── backend/                   # Node.js & Express REST API Service
│   ├── src/
│   │   ├── controller/        # Request handling logic
│   │   ├── middleware/        # Authentication & validation middleware
│   │   ├── model/             # Database models & schemas
│   │   ├── routes/            # API endpoint definitions
│   │   ├── services/          # Business logic services
│   │   ├── utils/             # Helpers & utility functions
│   │   ├── validators/        # Input payload sanitizers
│   │   └── index.js           # Server bootstrap & middleware setup
│   ├── README.md              # Dedicated backend API documentation
│   └── package.json           # Backend dependencies & scripts
│
└── README.md                  # Master project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.x or v20.x (LTS recommended)
- **npm** or **yarn** / **pnpm**
- **Docker & Docker Compose** *(optional, for containerized run)*

---

### 1. Frontend Setup (Next.js)

```bash
# Navigate to the frontend directory
cd forntend

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

#### Available Frontend Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts local Next.js dev server with hot reload |
| `npm run build` | Builds optimized production standalone bundle |
| `npm run start` | Runs the production build |
| `npm run lint` | Runs Next.js ESLint checks |

---

### 2. Backend Setup (Express API)

```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Start the server
node src/index.js
```

The backend server runs by default on port `3000` (or `PORT` specified in your `.env` file).

---

## 🐳 Running with Docker

The frontend application includes a production-grade multi-stage `Dockerfile` producing a lean, standalone Node.js runner:

```bash
cd forntend

# Build and start via Docker Compose
docker compose up --build -d

# Or build the Docker image directly
docker build -t aipnt-frontend:latest .
docker run -p 3000:3000 aipnt-frontend:latest
```

---

## 🎨 Design & Technology Highlights

- **AIPNT Core Reactor Orb**: Dynamic visual center on the landing page representing the intelligence layer.
- **Interactive India Deployment Map**: Custom SVG-driven national deployment hub highlighting AIPNT's regional presence and partnerships across India.
- **Glassmorphic UI & Tailored Color System**: Built using responsive CSS variables, modern dark/light contrast balance, and high-performance micro-animations.
- **SEO & Social Share Ready**: Complete OpenGraph, Twitter Cards, canonical links, robots.txt, and XML sitemap configuration.

---

## 🏢 About AIPNT

**AI PNT Technologies Private Limited**  
📍 Silicon University Incubation Centre, Bhubaneswar, Odisha, India  
🌐 [https://www.aipnt.in](https://www.aipnt.in)  
✉️ Contact: contact@aipnt.in

---

## 📄 License

This project is proprietary and maintained by **AI PNT Technologies Private Limited**. All rights reserved.
