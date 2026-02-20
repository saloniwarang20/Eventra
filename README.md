# 🚀 Eventra – MERN Stack Event Collaboration Platform

Eventra is a full-stack event management and collaboration platform built using the MERN stack.
It allows users to create events, manage tasks using a Kanban board, and communicate in real-time via chat.

---

## 🌍 Live Demo

🔗 Frontend:

```
https://eventra-sage-ten.vercel.app/
```

🔗 Backend API:

```
https://eventra-i48t.onrender.com
```

---

## 🛠 Tech Stack

### Frontend

* React (Vite)
* React Router
* Axios
* Context API
* Tailwind CSS

### Backend

* Node.js
* Express.js
* JWT Authentication
* Cookie-based auth
* Socket.io (Real-time chat)

### Database

* MongoDB Atlas (Cloud)

### Deployment

* Frontend → Vercel
* Backend → Render

---

## ✨ Features

* 🔐 Secure Authentication (JWT + HTTP-only cookies)
* 📅 Event Creation & Management
* 📌 Kanban Task Board
* 💬 Real-Time Chat (Socket.io)
* 📧 Email Verification & Password Reset
* ☁️ Cloud Database Integration

---

## 🔐 Authentication Flow

* User registers/logs in
* Backend generates JWT
* JWT stored in HTTP-only cookie
* Protected routes verified via middleware
* Cross-origin cookie configured for production

---

## 🧠 What I Learned

* Production cookie configuration
* CORS handling between different domains
* Secure authentication using JWT
* Real-time communication using WebSockets
* Deploying full-stack applications
