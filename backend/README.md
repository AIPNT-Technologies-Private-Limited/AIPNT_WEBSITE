# AI PNT Technologies — Backend API Service

<div align="center">

[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongoosejs.com/)
[![JWT](https://img.shields.io/badge/JWT-Authentication-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)

**Backend REST API service powering the AI PNT Technologies digital ecosystem**

</div>

---

## 📌 Overview

The **AIPNT Backend** is a modular REST API built on **Node.js** and **Express 5**. It is designed to handle core backend services for the AI PNT Technologies platform, including:

- User authentication & role-based access control (Admin, Student, Enterprise, Partner)
- Internship & training program application submissions
- Product inquiries, leads, and contact submissions
- Educational platform services (Prarambh coding platform integration)
- IoT & robotics hardware catalog data and order requests
- Digital governance & enterprise service requests

---

## 🏛️ Architecture & Folder Structure

The backend follows a **layered MVC/service-oriented architecture** ensuring clean separation of concerns, testability, and scalability:

```text
backend/
├── src/
│   ├── controller/      # HTTP request handling, response formatting, status codes
│   ├── middleware/      # Auth verification (JWT), rate limiting, error handling
│   ├── model/           # Mongoose schemas and data models
│   ├── routes/          # Express route definitions grouped by domain
│   ├── services/        # Core business logic and external integrations
│   ├── utils/           # Shared helper functions, logger, response handlers
│   ├── validators/      # Request payload validation schemas (Joi / Zod / custom)
│   └── index.js         # Application bootstrap & middleware pipeline
├── package.json         # Dependencies & scripts
└── README.md            # Backend documentation
```

---

## 🛠️ Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/) (v18+ or v20+ LTS recommended)
- **Framework**: [Express 5](https://expressjs.com/)
- **Database ODM**: [Mongoose](https://mongoosejs.com/) (MongoDB)
- **Security & Auth**: `jsonwebtoken` (JWT), `cookie-parser`, `bcryptjs`
- **Environment Management**: `dotenv`

---

## ⚙️ Environment Variables

Create a `.env` file in the root of the `backend/` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/aipnt_db

# Security & Authentication
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRES_IN=7d
COOKIE_SECRET=your_cookie_signing_secret

# CORS
CORS_ORIGIN=http://localhost:3000
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
cd backend
npm install
```

> **Note**: To install planned dependencies (if not yet added to `node_modules`):
> ```bash
> npm install mongoose cookie-parser jsonwebtoken dotenv cors
> ```

### 2. Start the Development Server
```bash
# Run using node
node src/index.js

# Or with nodemon (if installed globally or via npx)
npx nodemon src/index.js
```

The server will start and listen on port `3000` (or the configured `PORT` in `.env`).

---

## 📡 API Layer Guidelines

When adding new endpoints to this service:

1. **Routes (`src/routes/`)**: Keep route files focused on URL path mappings and middleware chaining (e.g., `authMiddleware`, `validatePayload`).
2. **Controllers (`src/controller/`)**: Parse `req.body` / `req.params`, invoke corresponding service methods, and return standard JSON responses.
3. **Services (`src/services/`)**: Contain all database queries, calculations, and 3rd-party API calls. Never access HTTP request/response objects directly in services.
4. **Validators (`src/validators/`)**: Validate request inputs before they reach controllers.

---

## 📄 License

Proprietary © AI PNT Technologies Private Limited. All rights reserved.
