const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// @route   POST /api/messages
// @desc    Send a message
router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ message: 'Please provide all fields' });
        }
        
        const newMessage = new Message({ name, email, message });
        await newMessage.save();
        
        res.status(201).json({ message: 'Message sent successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// @route   GET /api/messages
// @desc    Get all messages
router.get('/', async (req, res) => {
    try {
        const messages = await Message.find({});
        res.json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
