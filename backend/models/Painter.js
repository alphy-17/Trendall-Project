// Author : Alphy Baby
// Last revised : 06-06-2024

// Importing the mongoose module for interacting with MongoDB
const mongoose = require('mongoose');

// Define a schema for the 'Painter' collection in MongoDB
// A schema defines the structure of the documents within the collection
const painterSchema = new mongoose.Schema({
    // Define the 'painter_id' field
    // Type: Number, Required: Yes
    painter_id: { type: Number, required: true },
    // Define the 'painter_name' field
    // Type: String, Required: Yes
    painter_name: { type: String, required: true }
});

// Create a model from the schema
// A model provides an interface to the database for creating, querying, updating, and deleting records
// Parameters:
//   1. 'Painter': The name of the model (and the collection in MongoDB will be 'Painters' in plural form)
//   2. painterSchema: The schema to use for this model
const Painter = mongoose.model('Painter', painterSchema);

// Export the model so it can be used in other parts of the application
// module.exports makes the Painter model available to other files that require it
module.exports = Painter;
