// Author : Alphy Baby
// Last revised : 06-06-2024

// Import the Mongoose library to interact with MongoDB
const mongoose = require('mongoose');

// Define the schema for the TypeOfArtifact collection
// A schema in Mongoose defines the structure of documents within a collection
const typeOfArtifactSchema = new mongoose.Schema({
    // Define the artifact_type_id field with type Number and set it as required
    artifact_type_id: { type: Number, required: true },
    
    // Define the artifact_type_name field with type String and set it as required
    artifact_type_name: { type: String, required: true }
});

// Create a Mongoose model for the TypeOfArtifact collection
// A model in Mongoose is a constructor compiled from a schema
// The first argument is the singular name of the collection your model is for.
// Mongoose automatically looks for the plural, lowercased version of your model name.
// Thus, for the TypeOfArtifact model, the TypeOfArtifact collection will be used.
const TypeOfArtifact = mongoose.model('TypeOfArtifact', typeOfArtifactSchema);

// Export the TypeOfArtifact model so it can be used in other parts of the application
module.exports = TypeOfArtifact;

