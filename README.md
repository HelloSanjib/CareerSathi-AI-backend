# ⚙️ CareerSathi AI - Backend Server

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

The backend server for **CareerSathi AI**, providing robust APIs for user authentication, AI interview logic, history tracking, and payment integrations.

## ✨ Features
- **RESTful API:** Clean API architecture built with Express.js.
- **Database:** MongoDB integration via Mongoose for flexible data storage.
- **Authentication:** Secure JWT-based authentication combined with Google OAuth parsing.
- **AI Integration:** Prompts and processing logic for generating dynamic interview questions and evaluations.
- **Payments:** Integrated Razorpay for premium subscription management.
- **File Handling:** Resume and document uploads processed with `multer` and `pdfjs-dist`.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB instance (local or MongoDB Atlas)

### Installation

1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root of the `server` directory. Required variables typically include:
   ```env
   PORT=8000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   RAZORPAY_KEY_ID=your_razorpay_key
   RAZORPAY_KEY_SECRET=your_razorpay_secret
   # Your chosen AI Provider Key (e.g., GEMINI_API_KEY)
   ```
4. Start the development server using nodemon:
   ```bash
   npm run dev
   ```

## 📂 Project Structure
- `/config` - Database and third-party configuration files.
- `/controllers` - API route logic and handlers.
- `/middlewares` - Custom middleware (e.g., auth checks, multer upload).
- `/models` - Mongoose database schemas.
- `/routes` - Express route definitions.
- `/services` - External API integrations and AI provider logic.
- `/public` - Storage for temporary uploaded files (ignored by Git).

## 🔒 Security
- **CORS** restricts frontend interactions securely.
- Secure HTTP-only cookies utilized via `cookie-parser` for user sessions.
- Bcrypt integration and secure random token generation (via crypto).
