const mongoose = require('mongoose');
const messageSchema = new mongoose.Schema({
  chatroom: { type: mongoose.Schema.Types.ObjectId, ref: 'Chatroom' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  text: String,
  timestamp: { type: Date, default: Date.now },
});
messageSchema.index({ timestamp: 1 }, { expireAfterSeconds: 7200 });  // Expire after 2 hours
module.exports = mongoose.model('Message', messageSchema);