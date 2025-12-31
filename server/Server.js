const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
require('dotenv').config();
require('./config/passport');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: '*' } });

mongoose.connect(process.env.MONGO_URI);

app.use(cors());
app.use(express.json());
app.use('/auth', require('./routes/authRoutes'));
app.use('/chatrooms', require('./middleware/authMiddleware'), require('./routes/chatroomRoutes'));

io.on('connection', (socket) => {
  socket.on('joinRoom', (roomId) => socket.join(roomId));
  socket.on('sendMessage', async (data) => {
    const message = new (require('./models/Message'))(data);
    await message.save();
    io.to(data.chatroom).emit('message', message);
  });
});

server.listen(5000, () => console.log('Server running on port 5000'));