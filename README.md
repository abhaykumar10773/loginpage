# 🚀 Full-Stack Intern Assignment

This is a full-stack application built as part of the Full-Stack Intern Assignment. It includes a **React + TypeScript frontend** and a **Node.js + TypeScript backend**, connected to a **MySQL database using Prisma**. The frontend is developed based on a provided Figma design.

---

## 🔧 Tech Stack

### 🔹 Frontend
- React + TypeScript
- React Hook Form
- Zod (form validation)
- React Query (data fetching + caching)
- Axios
- Tailwind CSS (for styling)

### 🔹 Backend
- Node.js + Express.js
- TypeScript
- Prisma ORM
- MySQL
- dotenv (for environment variables)

---

## ⚙️ Setup Instructions

### 📦 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd loginpage

```
2. Frontend Setup
cd frontend
npm install
npm run dev
Runs the app in development mode at http://localhost:5173


3. Backend Setup
cd backend
npm install

**Create a .env file inside the backend/ folder:**

DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/DATABASE_NAME"
PORT=5000

**Now run Prisma migrations:**
npx prisma migrate dev --name init
npx prisma generate

Then start the backend server:

npm run dev

**Runs the backend at http://localhost:5000**

**Prisma Schema (User Model)**

model User {
  id       Int    @ubique
  password String
}

**Features**
Full Figma design implementation

Form validation with Zod + React Hook Form

API requests via Axios

Data fetching and caching using React Query

Typed API responses with TypeScript interfaces

Error messages for form and API validation

Backend built with Express + Prisma + MySQL

Robust error handling in both frontend and backend

 Demo Video
📎[ Google Drive Link to Demo Video ](https://drive.google.com/file/d/16wDMA_uWh2LtiJceSyMiiLl-1C3jehB4/view?usp=drive_link)
✅ The video demonstrates:

Login/Register flow

API interaction and error handling

Working frontend + backend
