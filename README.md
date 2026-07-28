<h1 align="center">
🌐 API Gateway
</h1>

<h3 align="center">
Single Entry Point for the Airline Booking System Microservices
</h3>

<p align="center">

<img src="https://img.shields.io/badge/Node.js-22.x-339933?style=for-the-badge&logo=node.js&logoColor=white">
<img src="https://img.shields.io/badge/Express.js-Framework-000000?style=for-the-badge&logo=express">
<img src="https://img.shields.io/badge/JWT-Authentication-000000?style=for-the-badge&logo=jsonwebtokens">
<img src="https://img.shields.io/badge/HTTP-Proxy_Middleware-blue?style=for-the-badge">
<img src="https://img.shields.io/badge/Microservices-API_Gateway-success?style=for-the-badge">

</p>

---

# 📖 Overview

The **API Gateway** acts as the single entry point for the Airline Booking System. Instead of exposing every microservice directly to the client, all incoming requests first pass through the gateway.

The gateway is responsible for routing requests to the appropriate backend service, performing authentication checks for protected endpoints, and hiding the internal microservice architecture from clients.

---

# 🚀 Features

- 🌐 Single Entry Point
- 🔀 Request Routing
- 🔐 JWT Authentication Middleware
- 📦 Reverse Proxy using http-proxy-middleware
- ⚡ REST API Gateway
- 🛡️ Protected Booking APIs
- 🔄 Seamless Communication with Microservices
- ☁️ Production Ready

---

# 🏗 Architecture

```text
                Client
                   │
                   ▼
            API Gateway (3005)
                   │
     ┌─────────────┼──────────────┐
     ▼             ▼              ▼
Auth Service   Flight Service   Booking Service
    │               │                │
    └───────────────┴────────────────┘
```

---

# 🔀 Request Routing

| Client Endpoint | Forwarded To |
|-----------------|--------------|
| `/signup` | Auth Service |
| `/login` | Auth Service |
| `/city` | Flight Service |
| `/flights` | Flight Service |
| `/booking` | Booking Service |

---

# 🔐 Authentication Flow

Only the **Booking APIs** are protected.

```text
Client

↓

API Gateway

↓

Validate JWT Token

↓

Auth Service

↓

Booking Service
```

If the token is valid, the request is forwarded to the Booking Service. Otherwise, the gateway returns an **Unauthorized (401)** response.

---

# 📁 Project Structure

```text
API_Gateway
│
├── src
│   ├── config
│   ├── middlewares
│   ├── routes
│   ├── index.js
│
├── package.json
├── .env
└── README.md
```

---

# ⚙️ Environment Variables

Create a `.env` file inside the project root.

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

Move into the project

```bash
cd API_Gateway
```

Install dependencies

```bash
npm install
```

Create the environment file

```bash
cp .env.example .env
```

Start the server

```bash
npm start
```

---

# 📡 Available Routes

## Authentication

```http
POST /signup
```

```http
POST /login
```

---

## Flight APIs

```http
GET /flights
```

```http
GET /city
```

---

## Booking APIs (Protected)

```http
POST /booking
```

Requires

```
x-access-token
```

in the request header.

---

# 🛠 Tech Stack

| Category | Technology |
|-----------|------------|
| Runtime | Node.js |
| Framework | Express.js |
| Authentication | JWT |
| Proxy | http-proxy-middleware |
| HTTP Client | Axios |
| Logging | Morgan |
| CORS | cors |

---

# 🔗 Connected Services

| Service | Port |
|----------|------|
| Flight Service | 3000 |
| Auth Service | 3001 |
| Booking Service | 3002 |

---

# 🌍 Part of

This repository is one of the microservices of the **Airline Booking System**.

Main Repository:

https://github.com/Lovejindal1/Airline-Booking-System

---

# 👨‍💻 Author

## Love Jindal

Backend Developer

### Connect with me

- GitHub: https://github.com/Lovejindal1
- LinkedIn: https://www.linkedin.com/in/love-kumar-jindal/

---

⭐ If you found this project useful, consider giving it a star.