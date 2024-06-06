// Author : Alphy Baby
// Last revised : 06-06-2024

// Import the mongoose module, which is a MongoDB object modeling tool designed to work in an asynchronous environment.
const mongoose = require('mongoose');

// Define a schema for the ArtifactCollection. A schema defines the structure of the documents within a collection.
const artifactCollectionSchema = new mongoose.Schema({
    // artifact_id is a field of type Number and is required. It represents the unique identifier for an artifact.
    artifact_id: { type: Number, required: true },
    
    // collection_id is a field of type Number and is required. It represents the unique identifier for a collection.
    collection_id: { type: Number, required: true }
});

// Create a model based on the schema. A model is a class with which we construct documents.
const ArtifactCollection = mongoose.model('ArtifactCollection', artifactCollectionSchema);

// Export the model so it can be used in other parts of the application.
module.exports = ArtifactCollection;

