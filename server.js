const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const mongoose = require('mongoose');
const pollRoutes = require('./routes/pollRoutes');
const voteRoutes = require('./routes/voteRoutes');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/poll-app', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json());

// API routes
app.use('/api/polls', pollRoutes);
app.use('/api/votes', voteRoutes);

// Socket.io for real-time updates
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle real-time voting
  socket.on('vote', (data) => {
    // Save the vote in the database and emit updates to all connected clients
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
