const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// @route   GET /api/projects
// @desc    Get all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find({});
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

// @route   POST /api/projects
// @desc    Add a project
router.post('/', async (req, res) => {
    try {
        const { title, description, imageUrl, techStack, liveLink, githubLink } = req.body;
        const project = new Project({
            title,
            description,
            imageUrl,
            techStack,
            liveLink,
            githubLink
        });
        const createdProject = await project.save();
        res.status(201).json(createdProject);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
