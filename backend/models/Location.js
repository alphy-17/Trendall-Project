// Author : Alphy Baby
// Last revised : 06-06-2024

// Import the mongoose library to interact with MongoDB
const mongoose = require('mongoose');

// Define the schema for the 'Location' collection in MongoDB
// A schema in mongoose defines the structure of the documents within the collection
const locationSchema = new mongoose.Schema({
    location_id: { 
        type: Number, // Specifies that 'location_id' should be a number
        required: true // Indicates that 'location_id' is a mandatory field
    },
    location_name: { 
        type: String, // Specifies that 'location_name' should be a string
        required: true // Indicates that 'location_name' is a mandatory field
    }
});

// Create a model from the schema
// A model in mongoose is a wrapper for the schema, providing an interface to interact with the database
// Parameters:
// - 'Location': The name of the model, which mongoose will use to create the collection name (lowercased and pluralized)
// - locationSchema: The schema to use for this model
const Location = mongoose.model('Location', locationSchema);

// Export the model to make it available for import in other files
// When this module is imported, the 'Location' model will be accessible
module.exports = Location;

