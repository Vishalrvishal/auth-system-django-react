# 🔐 Authentication System (Django + React)

## 📌 Project Description
This project is a secure authentication system built using Django REST Framework and React.js.
It includes user registration, email verification, and JWT-based login.

## 🚀 Features
- User Registration
- Email Verification using Token
- Login with JWT Authentication
- Protected APIs
- React Frontend Integration

## 🛠 Tech Stack
- Frontend: HTML, CSS, JavaScript, React.js
- Backend: Python, Django, Django REST Framework
- Authentication: JWT (SimpleJWT)
- Database: SQLite

## 🔄 Authentication Flow
1. User registers
2. Verification email sent with token
3. User verifies email
4. User logs in and receives JWT tokens

## ▶️ How to Run

### Backend
```bash
cd backend
python -m venv venv
.venv\Scripts\activate
pip install -r requirements.txt
python manage.py runserver

### Frontend
cd frontend
npm run dev

