Authentication System – Django REST & React
Project Summary

Developed a full-stack authentication system using Django REST Framework and React.js.
Implemented JWT-based authentication, email verification, and secure user management following industry best practices.

Key Skills & Technologies

Python, Django, Django REST Framework, React.js, JavaScript, JWT Authentication, Email Verification, REST APIs, SQLite, Git, GitHub, HTML, CSS

Core Features

User registration with backend validation

Custom Django User model

Email verification using unique token

JWT authentication (access & refresh tokens)

Login restriction until email verification

RESTful API design

Frontend–backend integration using React

Secure password hashing and authentication

Authentication Workflow

User submits registration details

Backend generates verification token

Email verification required before login

JWT tokens issued on successful login

Protected routes accessed using access token

Technical Implementation

Extended Django AbstractUser to add verification logic

Implemented JWT using SimpleJWT

Built REST APIs using Django REST Framework

Connected React frontend to Django backend using fetch/axios

Handled HTTP status codes and authentication errors

API Endpoints

POST /register/ – User registration

GET /verify/<token>/ – Email verification

POST /login/ – JWT login authentication

Project Structure
backend/   → Django REST APIs
frontend/  → React.js UI

Setup Instructions
Backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

Frontend
npm install
npm run dev

Learning Outcomes

JWT authentication flow

Email verification implementation

Secure API development

Full-stack project integration

Real-world authentication architecture

Future Enhancements

Password reset via email

Role-based authorization


Author

Vishal – Full-Stack Developer

