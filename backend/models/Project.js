const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    techStack: {
        type: [String],
        required: true
    },
    liveLink: {
        type: String,
        required: false
    },
    githubLink: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
