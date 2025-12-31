const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: String,  // Hashed
  googleId: String,
  email: String,
  location: { lat: Number, lng: Number },  // User's last known location
});
module.exports = mongoose.model('User', userSchema);