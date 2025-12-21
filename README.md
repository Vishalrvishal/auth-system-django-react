🔐 Authentication System (Django + React)

A full-stack authentication system built using Django REST Framework and React.js, featuring email verification and JWT-based authentication.

This project demonstrates real-world authentication concepts, backend–frontend integration, and secure user management.

📌 Features

User Registration

Email Verification using Token

Login with JWT Authentication

Access & Refresh Token mechanism

Protected API endpoints

React frontend integration

Secure password handling

🧠 Authentication Flow

User registers with username, email, and password

Backend generates a unique verification token

Verification link is sent to user’s email

User verifies email using the token

Login is allowed only after verification

JWT tokens are issued on successful login

🛠 Tech Stack
Frontend

HTML

CSS

JavaScript

React.js

Backend

Python

Django

Django REST Framework

Authentication

JWT (SimpleJWT)

Email verification token

Database

SQLite (development)

📂 Project Structure
AUTH_system/
│
├── backend/
│   ├── auth_api/
│   ├── backend/
│   ├── manage.py
│
├── frontend/
│   ├── src/
│   ├── public/
│
├── docs/
│   └── Auth_System_Project_With_Interview_QA.pdf
│
├── README.md
└── .gitignore

▶️ How to Run the Project
🔹 Backend Setup
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver


Server will start at:

http://127.0.0.1:8000/

🔹 Frontend Setup
cd frontend
npm install
npm run dev


Frontend will run at:

http://localhost:5173/

🔐 API Endpoints
Method	  Endpoint	          Description
POST	    /register/	        Register new user
GET	      /verify/<token>/	  Verify email
POST	    /login/	            Login user


🎯 What I Learned
Creating a custom Django User model

Implementing email verification logic

Using JWT for stateless authentication

Connecting React frontend with Django APIs

Handling authentication errors securely


👨‍💻 Author
Vishal
Full-Stack Developer (Django + React)

