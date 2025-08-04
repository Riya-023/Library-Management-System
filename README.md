# 📚 BookWorm – Library Management System (Backend)

A robust and scalable **Library Management System backend** built with **Node.js** and **MongoDB**, designed to handle users, books, borrow requests, email verification, fines, and admin controls.

> 🎨 Frontend is currently in progress and will be integrated soon.

---

## 🚀 Project Overview

**BookWorm** provides a powerful backend foundation for a library system where:
- Users can register, login, verify accounts via OTP, borrow books, return them.
- Admins can manage books, users, and monitor overdue returns with fine calculation.

---

## 📁 Project Structure
```
Librarymanagementsystem/
└── server/ → Backend (Node.js + Express + MongoDB)
├── controllers/
├── models/
├── routes/
├── middlewares/
├── utils/
├── services/
└── config/
```
---

## ✨ Features

- 🔐 User Authentication with OTP Verification
- 📦 Book Management (Admin only)
- 📚 Borrow & Return Functionality
- ⏰ Due Date & Fine Calculation System
- 📬 Email Notifications (OTP / Forgot Password)
- 🧑 Admin Role Management
- 📊 Token-Based Authentication (JWT)
- 📥 File Upload Support for Avatars (Using Temp Files)
- ✅ Modular Codebase following MVC Architecture

---

## 🧰 Tech Stack

### ⚙️ Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- Bcrypt.js
- Nodemailer
- Cloudinary (Image Uploads – optional)
- Express File Upload

---

## 🔒 Security & Validation

- Password hashing using bcrypt
- Verification codes & password reset tokens via crypto
- Custom error handler middleware
- Protected admin routes
- Email validation and length checks

---

## 🛠️ Getting Started

### 🔗 Prerequisites
- Node.js
- MongoDB (local or Atlas)
- npm

---

### 📥 Installation

1. **Clone the Repository**
```
git clone  https://github.com/Riya-023/Library-Management-System.git
cd server
```

2. **Install Dependencies**
```npm install```

3. **Create Environment File**
Create a config.env file in the server/config/ directory:
```
PORT=4000
FRONTEND_URL=http://localhost:5173
MONGO_URI=your_mongo_connection_string
JWT_SECRET_KEY=your_secret_key
JWT_EXPIRE=5d
COOKIE_EXPIRE=3
SMTP_HOST=smtp.gmail.com
SMTP_SERVICE=gmail
SMTP_PORT=465
SMTP_USER=your_email
SMTP_PASSWORD=your_password
CLOUDINARY_CLIENT_NAME=your_cloud_name
CLOUDINARY_CLIENT_API=your_api_key
CLOUDINARY_CLIENT_SECRET=your_api_secret
```

---

## 🤝 Contributing

We welcome contributions! To contribute:

1. Fork this repository
2. Create your branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m "Add YourFeature"`
4. Push to the branch: `git push origin feature/YourFeature`
5. Submit a Pull Request
   
---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
