# BHCG-TaskApp
A simple, modern, full-stack task management web application built with React, Node.js, Express, and MongoDB, featuring a sleek dark-themed UI.

The Code for server is at [https://github.com/Virtuoso-2512/BHCG-TaskApp-Server](Server GitHub Repo) .


---

## 🛠️ Tech Stack

* **Client:** React, React Router
* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose
* **Environment Management:** Dotenv, CORS, Nodemon

---

## ✨ Features & Functionality

* **Core CRUD Operations:** Create, view, and delete tasks seamlessly.
* **Advanced Attributes:** Assign priorities (*High, Medium, Low*), statuses, and due dates to keep organized.
* **Dynamic Search & Filtering:** Real-time search bar that filters tasks instantly.
* **Modern UI/UX:** Dark-mode interface featuring a glowing pill search bar.

---

## 🏗️ Architectural & Technical Decisions

1. **Full-Stack with Future-Proofing (MERN):** 
   * While built as a **single-user application** for this specific scope and time constraint, the Mongoose schema and controllers are explicitly structured with a `userId` relationship. This ensures that transitioning to a fully authenticated, multi-user environment (via JWT) requires minimal refactoring.
2. **Modular Backend Structure:** 
   * The backend adopts a clean Controller-Route-Model pattern (`server.js` -> `routes/` -> `controllers/` -> `models/` -> `config/`) to keep infrastructure configuration separate from core business logic.
3. **Client Service Layer:** 
   * API requests are completely isolated inside a dedicated services layer (`services/api.js`) to keep React components modular and testable.
4. **Pragmatic UI Feedback:** 
   * Relies on native browser interactions (`window.alert`, `window.confirm`) to handle edge cases cleanly and rapidly, avoiding heavy third-party dependency bloat and focusing effort on core requirements.

---

## 📂 Project Folder Structure

```text
task-management-app/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection setup
│   ├── controllers/
│   │   └── taskController.js     # CRUD business logic
│   ├── models/
│   │   └── taskModel.js          # Mongoose schema with future-proofed userId
│   ├── .env                      # Environment variables (Port, Mongo URI)
│   ├── server.js                 # Express app entry point
│   └── package.json
│
└── Client/
    ├── src/
    │   ├── components/
    │   │   ├── Home.jsx          # Main landing view with search & grid
    │   │   └── SearchBar.jsx     # Glowing pill search bar component
    │   │   └── (Similar Files)   
    │   ├── services/
    │   │   └── api.js            # Centralized fetch wrapper for backend calls
    │   ├── App.jsx               # Root component & React Router setup
    │   ├── Home.css              # Dark-theme layout styles
    │   ├── SearchBar.css         # Search pill styles & radial glow effects
    │   └── index.css             # Global reset styles
    └── package.json
```
🚀 Getting Started & Setup Instructions
Prerequisites
Node.js installed on your machine

A local MongoDB instance or a MongoDB Atlas connection string

1. Clone the Repository

2. Set Up and Run the Backend
```bash
cd backend
npm install
```

Create a .env file inside the backend directory and add your configuration:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string_here
```

Start the development server with hot-reloading:

```bash
npm run dev
```

3. Set Up and Run the Client
Open a new terminal window, navigate to the Client directory, and run:

```bash
cd Client
npm install
npm run start
```
The application will run locally at http://localhost:3000 and communicate with your Express API at http://localhost:5000.