const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

const MOCK_PROJECTS = [
    {
        _id: '1',
        title: 'AI Karaoke Song Selector',
        description: 'An AI-powered web app using Flask and Hugging Face API (Mistral-7B) to recommend songs based on users vocal ranges.',
        techStack: ['Python', 'Flask', 'Hugging Face API', 'JS'],
        githubLink: 'https://github.com/HimanshuChaudharii/AI-Project-Ai-Karaoke-Song-Selector',
        imageUrl: '/karaoke-ai.png'
    },
    {
        _id: '2',
        title: 'Traffic Data Analysis',
        description: 'Conducted EDA on NYC MTA AADT (2008–2021) traffic data to identify seasonal/COVID patterns and automated monthly pipelines.',
        techStack: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib'],
        githubLink: 'https://github.com/HimanshuChaudharii/PythonProjectINT375',
        imageUrl: '/traffic-data.png'
    },
    {
        _id: '3',
        title: 'SpotMyStay',
        description: 'A full-stack hostel discovery and booking platform with secure JWT authentication, admin/owner dashboards, and property listing management workflows.',
        techStack: ['React', 'Vite', 'Express', 'Node.js', 'MongoDB'],
        githubLink: 'https://github.com/HimanshuChaudharii/spotmystay',
        imageUrl: '/spotmystay.png'
    }
];

// @route   GET /api/projects
// @desc    Get all projects
router.get('/', async (req, res) => {
    try {
        if (!req.isDBConnected) {
            console.log('Serving projects from mock data...');
            return res.json(MOCK_PROJECTS);
        }
        const projects = await Project.find({});
        res.json(projects);
    } catch (error) {
        console.error('Project fetch error, falling back to mock:', error.message);
        res.json(MOCK_PROJECTS);
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
