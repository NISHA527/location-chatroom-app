const Chatroom = require('../models/Chatroom');
const { getDistance } = require('geolib');

exports.createChatroom = async (req, res) => {
  const { name, lat, lng, radius } = req.body;
  const chatroom = new Chatroom({ name, location: { lat, lng }, radius, creator: req.user.id });
  await chatroom.save();
  res.status(201).json(chatroom);
};

exports.getChatrooms = async (req, res) => {
  const chatrooms = await Chatroom.find();
  res.json(chatrooms);
};

exports.joinChatroom = async (req, res) => {
  const chatroom = await Chatroom.findById(req.params.id);
  const distance = getDistance(
    { latitude: req.user.location.lat, longitude: req.user.location.lng },
    { latitude: chatroom.location.lat, longitude: chatroom.location.lng }
  ) / 1000;  // Convert to km
  if (distance > chatroom.radius) return res.status(403).json({ message: 'Out of range' });
  res.json({ message: 'Joined' });
};