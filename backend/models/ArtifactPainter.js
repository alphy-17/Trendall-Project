// Author : Alphy Baby
// Last revised : 06-06-2024

// Import the mongoose module
const mongoose = require('mongoose');

// Define the schema for the ArtifactPainter model
// This schema represents the relationship between an artifact and a painter

const artifactPainterSchema = new mongoose.Schema({
    artifact_id: { type: Number, required: true }, // The ID of the artifact, must be a number and is required
    painter_id: { type: Number, required: true }  // The ID of the painter, must be a number and is required
});

/**
 * ArtifactPainter model
 * @typedef {Object} ArtifactPainter
 * @property {number} artifact_id - The ID of the artifact
 * @property {number} painter_id - The ID of the painter
 * 
 * This model represents the relationship between an artifact and a painter.
 * It is used to store and manage the associations in the MongoDB database.
 */
const ArtifactPainter = mongoose.model('ArtifactPainter', artifactPainterSchema);

// Export the ArtifactPainter model so it can be used in other parts of the application
module.exports = ArtifactPainter;

