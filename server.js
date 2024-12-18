const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();

// Middleware setup
app.use(express.json()); // For parsing application/json
app.use(cookieParser()); // For parsing cookies
app.use(cors()); // Enabling CORS for all requests

// Log every incoming request (This should be before the route definitions)
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
});



// User routes for user registration, login, etc.
app.use('/api/users', userRoutes);

// Error handling for invalid routes (404 - Route not found)
// This should be the LAST middleware after all routes
app.use((req, res, next) => {
  console.log(`Route not found: ${req.method} ${req.url}`);
  res.status(404).send('Route not found');
});

// Error handling middleware for any uncaught errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
