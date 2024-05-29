const mongoose = require('mongoose');

const artifactSchema = new mongoose.Schema({
    artifact_id: { type: Number, required: true },
    fabric_name: { type: String },
    height: { type: String },
    diameter: { type: String },
    publications: { type: String },
    image_description: { type: String },
    date: { type: String, default: null }
});

const Artifact = mongoose.model('Artifact', artifactSchema);

module.exports = Artifact;
