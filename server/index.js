// server/index.js

const express = require('express');
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

// Specify origin of frontend
const corsOptions = {
  origin: 'https://react-app-1-11yk.onrender.com', // Replace with your frontend URL
};

// Enable CORS with options
app.use(cors(corsOptions));

// Example route to serve users data
app.get('/users', (req, res) => {
  // Simulated data for demonstration
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];
  res.json(users);
});

// Example route to serve posts data via /api prefix
app.get('/api/posts', (req, res) => {
  // Simulated data for demonstration
  const posts = [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
  ];
  res.json(posts);
});

// Serve static files from the React frontend build
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle all other GET requests: serve React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
