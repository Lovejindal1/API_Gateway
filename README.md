# 🌐 API Gateway

<p align="center">
The API Gateway acts as the single entry point for the Airline Booking System. It routes incoming client requests to the appropriate microservice while handling request forwarding, authentication, logging and cross-origin support.
</p>

<p align="center">

<img src="https://img.shields.io/badge/Node.js-22.x-339933?style=for-the-badge&logo=node.js&logoColor=white">
<img src="https://img.shields.io/badge/Express.js-Framework-000000?style=for-the-badge&logo=express">
<img src="https://img.shields.io/badge/API-Gateway-blue?style=for-the-badge">
<img src="https://img.shields.io/badge/JWT-Authentication-000000?style=for-the-badge&logo=jsonwebtokens">
<img src="https://img.shields.io/badge/AWS-EC2-232F3E?style=for-the-badge&logo=amazonaws">

</p>

---

# 📖 Overview

The API Gateway is responsible for routing all incoming client requests to the appropriate backend service.

Instead of exposing every microservice publicly, clients communicate only with the gateway. The gateway forwards requests, validates JWT tokens for protected routes and provides a centralized point for logging and request management.

This approach simplifies the client architecture while keeping backend services isolated.

---

# 🚀 Features

- 🌐 Single Entry Point
- 🔐 JWT Authentication Middleware
- 🔄 Reverse Proxy Routing
- 📋 Request Logging using Morgan
- 🌍 CORS Support
- ⚡ Lightweight & Fast
- 🛡️ Protected Booking Routes
- 🔗 Communication with Multiple Microservices

---

# 🏗 Architecture

```text
                Client
                   │
                   ▼
            API Gateway (3005)
                   │
     ┌─────────────┼─────────────┐
     ▼             ▼             ▼
 Auth Service   Flight Service   Booking Service
```

---

# 📂 Folder Structure

```text
API_Gateway
│
├── src
│   ├── config
│   ├── middlewares
│   ├── routes
│   └── index.js
│
├── package.json
├── .env
└── README.md
```

---

# ⚙️ Environment Variables

Create a `.env` file in the project root.

```env
PORT=3005

flightCityServicePORT=3000
authServicePORT=3001
bookingServicePORT=3002
```

---

# 🚀 Installation

Clone the repository

```bash
git clone https://github.com/Lovejindal1/API_Gateway.git
```

Move inside the project

```bash
cd API_Gateway
```

Install dependencies

```bash
npm install
```

Start the server

```bash
npm start
```

---

# 📡 Request Routing

| Client Endpoint | Routed To |
|----------------|-----------|
| `/signup` | Auth Service |
| `/login` | Auth Service |
| `/city` | Flight & Search Service |
| `/flights` | Flight & Search Service |
| `/booking` | Booking Service |

---

# 🔐 Authentication Flow

```text
Client

↓

API Gateway

↓

Validate JWT

↓

Forward Request

↓

Booking Service
```

Only authenticated users can access protected booking endpoints.

---

# 🛠 Tech Stack

| Category | Technology |
|-----------|------------|
| Runtime | Node.js |
| Framework | Express.js |
| Reverse Proxy | http-proxy-middleware |
| Authentication | JWT |
| HTTP Client | Axios |
| Logging | Morgan |
| Middleware | CORS |

---

# 🌍 Related Microservices

| Service | Repository |
|----------|------------|
| Airline Booking System | https://github.com/Lovejindal1/Airline-Booking-System |
| Auth Service | https://github.com/Lovejindal1/Auth_Service |
| Flight & Search Service | https://github.com/Lovejindal1/FlightAndSearchService |
| Booking Service | https://github.com/Lovejindal1/AirticketBookingService |
| Reminder Service | https://github.com/Lovejindal1/ReminderService |

---

# 👨‍💻 Author

## Love Jindal

Backend Developer passionate about building scalable backend systems using **Node.js**, **Express.js**, **AWS**, **RabbitMQ** and **Microservices**.

### Connect

- GitHub: https://github.com/Lovejindal1
- LinkedIn: https://www.linkedin.com/in/love-kumar-jindal/

---

⭐ If you found this project useful, consider giving it a star on GitHub.
