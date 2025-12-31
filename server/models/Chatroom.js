const mongoose = require('mongoose');
const chatroomSchema = new mongoose.Schema({
  name: String,
  location: { lat: Number, lng: Number },  // Center point
  radius: Number,  // In km
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Chatroom', chatroomSchema);