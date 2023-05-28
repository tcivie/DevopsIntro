const express = require('express');
const connectDB = require('./db');
const registerRoute = require('./routes/register');
const path = require('path');

// Connect to MongoDB
connectDB();

// Create Express application
const app = express();

app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '../public')));

app.use('/register', registerRoute);

module.exports = app; // Export the app for testing
