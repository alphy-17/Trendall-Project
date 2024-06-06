// Author : Alphy Baby
// Last revised : 06-06-2024

// Import the mongoose module
const mongoose = require('mongoose');

// Define the schema for artifact provenance
// This schema represents the relationship between an artifact and its location
const artifactProvenanceSchema = new mongoose.Schema({
    // artifact_id is a unique identifier for the artifact
    artifact_id: { 
        type: Number,    // Data type is Number
        required: true   // This field is required
    },
    // location_id is a unique identifier for the location
    location_id: { 
        type: Number,    // Data type is Number
        required: true   // This field is required
    }
});

// Create a model for artifact provenance
// Parameters:
// - 'ArtifactProvenance': The name of the model
// - artifactProvenanceSchema: The schema defined above
const ArtifactProvenance = mongoose.model('ArtifactProvenance', artifactProvenanceSchema);

// Export the model to be used in other parts of the application
module.exports = ArtifactProvenance;


