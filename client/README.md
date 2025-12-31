Location-Based Chatroom Application

A real-time, location-based chatroom application built using React, Node.js, Express, MongoDB, and Socket.io.
Users can authenticate using username/password or Google OAuth, create chatrooms with a defined location and radius, and chat in real time. Messages automatically expire after 2 hours.

🎯 Assignment Objective

Build a real-time chatroom system where:

Users can log in

Create and join chatrooms based on location

Chat in real time

Messages are time-limited (2 hours)

✨ Implemented Features
🔐 Authentication

Local authentication (username & password)

Google OAuth authentication (Passport.js)

JWT-based authorization

👤 User Features

User registration

User login

Location stored for distance validation

💬 Chatroom Features

Each chatroom contains:

Chatroom name

Location (latitude & longitude)

Radius (in kilometers)

Only users within the defined radius can join a chatroom.

⚡ Real-Time Chat

Real-time messaging using Socket.io

Messages show:

Username

Timestamp

⏱ Message Expiry

Messages automatically expire after 2 hours

Implemented using MongoDB TTL index

🌍 Location Logic

User location fetched from browser

Distance calculated using geolib

Access denied if user is outside radius

🛠 Technology Stack
Frontend

React

React Router DOM

Axios

Socket.io Client

Backend

Node.js

Express.js

Socket.io

Passport.js (Local + Google OAuth)

JWT Authentication

Database

MongoDB

Mongoose

📁 Project Structure
location-chatroom-app/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   │   ├── User.js
│   │   ├── Chatroom.js
│   │   └── Message.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── chatroomRoutes.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── config/
│   │   └── passport.js
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md

⚙️ Environment Variables
Backend (server/.env)
MONGO_URI=mongodb://localhost:27017/chatapp
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

Frontend (client/.env)
REACT_APP_API_URL=http://localhost:5000

▶️ Installation & Running the App
1️⃣ Clone Repository
git clone https://github.com/your-username/location-chatroom-app.git
cd location-chatroom-app

2️⃣ Backend Setup
cd server
npm install
npm run dev


Backend runs at:

http://localhost:5000

3️⃣ Frontend Setup
cd client
npm install
npm start


Frontend runs at:

http://localhost:3000

🔄 Application Flow

User logs in (local or Google OAuth)

Browser fetches user location

User creates or joins a chatroom

Distance is calculated using geolib

User joins only if within radius

Messages are sent in real time

Messages auto-delete after 2 hours

🧹 Message Expiry Implementation

Messages include a timestamp field

MongoDB TTL index deletes messages after 7200 seconds

No manual cleanup required

🧪 Testing Checklist

✅ User registration

✅ Login (local & Google)

✅ Chatroom creation

✅ Distance-based access control

✅ Real-time messaging

✅ Message auto-expiry

📄 License

This project is developed for educational and assignment purposes only.