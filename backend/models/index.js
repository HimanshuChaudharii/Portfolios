require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path'); // ✅ ADD THIS
const connectDB = require('../config/db');

const projectRoutes = require('../routes/projectRoutes');
const messageRoutes = require('../routes/messageRoutes');

const app = express();

// Connect to MongoDB
if (process.env.MONGO_URI) {
    connectDB();
} else {
    console.warn('MONGO_URI is missing. Database connection skipped.');
}

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/projects', projectRoutes);
app.use('/api/messages', messageRoutes);

// ✅ Serve frontend build
app.use(express.static(path.join(__dirname, '../../frontend/dist')));

// ✅ Catch-all middleware to handle React routes
app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'));
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});