// Author : Alphy Baby
// Last revised : 06-06-2024

// Import the mongoose module to interact with MongoDB
const mongoose = require('mongoose');

// Define the schema for artifacts using mongoose.Schema
// This schema represents the structure of the document to be stored in the 'artifacts' collection
const artifactSchema = new mongoose.Schema({
    artifact_id: { type: Number, required: true }, // Artifact identifier, required field
    fabric_name: { type: String }, // Fabric name of the artifact, optional field
    height: { type: String }, // Height of the artifact, optional field
    diameter: { type: String }, // Diameter of the artifact, optional field
    publications: { type: String }, // Publications related to the artifact, optional field
    image_description: { type: String }, // Description of the artifact's image, optional field
    date: { type: String, default: null } // Date associated with the artifact, default is null if not provided
});

// Create a model using the schema, which will interact with the 'artifacts' collection in the database
// The model provides an interface for interacting with the database collection, allowing CRUD operations
const Artifact = mongoose.model('Artifact', artifactSchema);

// Export the Artifact model to make it available for import in other files
// This allows other parts of the application to interact with the 'Artifact' model
module.exports = Artifact;
