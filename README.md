🎉 Eventra: A Collaborative Event Planner with Chat, Calendar & Kanban Board

A full-stack web application for seamless event management, real-time communication, and task collaboration.

🧭 Overview

Eventra is a collaborative event management system designed to simplify the process of planning, organizing, and executing events.
It enables coordinators and volunteers to work together efficiently with features like:

Event creation and scheduling

Real-time chat communication

Task tracking with a Kanban board

Volunteer and agenda management

Role-based access control

Built using the MERN Stack (MongoDB, Express.js, React.js, Node.js), it ensures real-time interactivity, scalability, and security.

🚀 Key Features
🗓️ Event Management

Create, edit, and cancel events.

View categorized lists — Active, Upcoming, and Past events.

Color-coded cards based on event type.

👥 Volunteer Management

Coordinators can add volunteers via email.

Volunteers can only access assigned events.

Roles like Usher, Tech Support, Logistics, and more.

🧩 Kanban Board

Drag-and-drop task management.

Columns for To Do, In Progress, and Done.

Coordinators can create or delete tasks.

💬 Chat Module

Real-time group chat using Socket.io.

Each event has a dedicated chatroom.

Messages include sender name and timestamp.

📅 Calendar Integration

Displays today’s, upcoming, and past events.

Cancelled events appear disabled (greyed out).

🔒 Authentication & Authorization

Secure login and signup using JWT tokens.

Role-based access control (Coordinator / Volunteer).

Cookies and protected routes ensure security.

🏗️ Tech Stack
Layer	Technology Used
Frontend	React.js, Tailwind CSS, Axios
Backend	Node.js, Express.js
Database	MongoDB (Mongoose ORM)
Real-Time	Socket.io
Authentication	JWT + Cookies
Deployment	Render / Vercel / MongoDB Atlas
⚙️ Project Architecture
Eventra/
│
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── eventController.js
│   │   ├── kanbanController.js
│   │   └── chatController.js
│   ├── models/
│   │   ├── userModel.js
│   │   ├── eventModel.js
│   │   ├── kanbanModel.js
│   │   └── chatModel.js
│   ├── routes/
│   │   ├── userRoutes.js
│   │   ├── eventRoutes.js
│   │   ├── kanbanRoutes.js
│   │   └── chatRoutes.js
│   ├── middleware/
│   │   ├── userAuth.js
│   │   └── coordinatorAuth.js
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── utils/
│   │   └── assets/
│   ├── public/
│   └── package.json
│
└── README.md

🧰 Installation Guide
1️⃣ Clone the Repository
git clone https://github.com/<your-username>/Eventra.git
cd Eventra

2️⃣ Setup the Backend
cd backend
npm install


Create a .env file inside /backend with:

PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173


Start the backend server:

npm run dev

3️⃣ Setup the Frontend
cd frontend
npm install
npm run dev


Visit 👉 http://localhost:5173

🔑 Default User Roles
Role	Description	Access
Coordinator	Creates and manages events	Full access
Volunteer	Participates and manages assigned tasks	Limited access
🎨 Color Coding by Event Type
Event Type	Color
Conference	🟦 #4092F7
Wedding	🩷 #F23D96
Seminar	🟩 #13F265
Festival	🟨 #F59B02
Corporate	🟪 #7C53F5
Other	⚫ #5E6470
🔒 Security Features

Passwords hashed using bcrypt.js.

JWT authentication for secure session handling.

Role-based middleware (userAuth, coordinatorAuth).

CORS and cookie protection implemented.

📡 Real-Time Functionalities
Feature	Technology
Chat System	Socket.io
Kanban Updates	Axios + React state
Event Fetching	REST API + JWT Auth
🧩 API Endpoints Overview
Authentication
Method	Endpoint	Description
POST	/api/auth/register	Register user
POST	/api/auth/login	User login
GET	/api/auth/logout	Logout user
Events
Method	Endpoint	Description
GET	/api/event/	Get all events
GET	/api/event/:id	Get event by ID
POST	/api/event/add	Create new event
PUT	/api/event/:id	Update event
DELETE	/api/event/:id	Cancel event
Kanban
Method	Endpoint	Description
GET	/api/kanban/:eventId/tasks	Fetch event tasks
POST	/api/kanban/:eventId/tasks	Add task
PUT	/api/kanban/tasks/:id	Update task
DELETE	/api/kanban/tasks/:id	Delete task

🧑‍💻 Developed By

👩‍💻 Saloni Warang
B.K. Birla College (Autonomous), Department of Computer Science
Under the Guidance of Ms. Prachi Adhiraj

🏁 Future Enhancements

Email notifications for volunteer additions.

Event analytics dashboard for coordinators.

Calendar synchronization with Google Calendar.

File sharing in chat.

Push notifications for task updates.

📜 License

This project is developed as part of an academic submission for B.K. Birla College, Kalyan.
All rights reserved © 2025.
