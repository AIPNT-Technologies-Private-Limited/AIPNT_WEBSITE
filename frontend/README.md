# AI PNT Technologies — Frontend Web Application

<div align="center">

![AIPNT Logo](/public/assets/logo.png)

**Next.js 14 Frontend Application for AI PNT Technologies**

[![Next.js](https://img.shields.io/badge/Next.js-14.2.35-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![React Icons](https://img.shields.io/badge/React_Icons-5.5.0-E91E63?style=for-the-badge&logo=react&logoColor=white)](https://react-icons.github.io/react-icons/)
[![Firebase](https://img.shields.io/badge/Firebase-12.11.0-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Docker](https://img.shields.io/badge/Docker-Multi--stage-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

</div>

---

## 📖 Overview

This directory contains the primary web application for **AI PNT Technologies Private Limited** ([aipnt.in](https://www.aipnt.in)). Built with Next.js 14 (App Router) and React 18, it delivers a high-performance, visually rich experience featuring product showcases, interactive diagrams, student and enterprise portals, and an interactive regional deployment map.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router, Standalone build)
- **Library**: React 18
- **Icons**: React Icons (FontAwesome 6, Feather, Material)
- **Styling**: Vanilla CSS with custom design tokens, glassmorphism, responsive layouts, and keyframe micro-animations
- **Backend / Services Integration**: Firebase SDK
- **Containerization**: Docker (multi-stage Alpine Linux runner)

---

## 📁 Key Routes & Pages

| Route | Page / Module | Purpose |
| :--- | :--- | :--- |
| `/` | `app/page.js` | Main Landing Page (Hero, Reactor Orb, Domains, Products, Deployment Map) |
| `/about` | `app/about/page.js` | Company story, vision, milestones & leadership |
| `/prarambh` | `app/prarambh/page.js` | Prarambh Coding Platform showcase |
| `/digiswasth` | `app/digiswasth/page.js` | DigiSwasth Healthcare AI & diagnostic solutions |
| `/atat` | `app/atat/page.js` | ATAT AI Teacher Assistant platform |
| `/enterprise-ai` | `app/enterprise-ai/page.js` | Enterprise AI automation & predictive models |
| `/government` | `app/government/page.js` | Public governance AI and institutional systems |
| `/edutech` | `app/edutech/page.js` | Education technology ecosystem |
| `/medtech` | `app/medtech/page.js` | Medical devices and connected healthcare |
| `/school-stem` | `app/school-stem/page.js` | K-12 STEM, Robotics labs, and curriculum |
| `/summer-internship` | `app/summer-internship/page.js` | Summer Internship tracks & registration |
| `/corporate-training` | `app/corporate-training/page.js` | Workforce upskilling & corporate workshops |
| `/shop` | `app/shop/page.js` | Hardware, robotics kits & sensor catalog |
| `/blog` | `app/blog/page.js` | AIPNT engineering articles and updates |
| `/contact` | `app/contact/page.js` | Inquiries and partnership portal |

---

## ⚡ Quickstart

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally in Development Mode
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the live development server.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 🐳 Docker Deployment

The application is configured with `output: "standalone"` in `next.config.mjs` for minimal Docker container images.

```bash
# Build & run with Docker Compose
docker compose up --build -d

# Stop containers
docker compose down
```

---

## 📄 License

Proprietary © AI PNT Technologies Private Limited. All rights reserved.
