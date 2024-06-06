// Author : Alphy Baby
// Last revised : 06-06-2024

// Import the mongoose library for interacting with MongoDB
const mongoose = require('mongoose');

// Define the schema for the ArtifactChapter collection
// This schema defines the structure of documents stored in the ArtifactChapter collection
const artifactChapterSchema = new mongoose.Schema({
    // artifact_id: A unique identifier for each artifact (required field)
    artifact_id: { type: Number, required: true },
    
    // chapter_id: A unique identifier for each chapter associated with the artifact (required field)
    chapter_id: { type: Number, required: true }
});

// Create the ArtifactChapter model based on the defined schema
// The model provides an interface for interacting with the ArtifactChapter collection
const ArtifactChapter = mongoose.model('ArtifactChapter', artifactChapterSchema);

// Export the ArtifactChapter model so it can be used in other parts of the application
module.exports = ArtifactChapter;
