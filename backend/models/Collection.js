// Author : Alphy Baby
// Last revised : 06-06-2024

// Importing the mongoose library to interact with MongoDB
const mongoose = require('mongoose');

// Defining the schema for the 'Collection' collection in MongoDB
// A schema defines the structure of the documents within a collection

const collectionSchema = new mongoose.Schema({
    // The 'collection_id' field, which is a required field of type Number
    collection_id: { type: Number, required: true },
    
    // The 'collection_name' field, which is a required field of type String
    collection_name: { type: String, required: true }
});

// Creating a Mongoose model for the 'Collection' schema
// A model is a wrapper for the schema and provides an interface to the database
const Collection = mongoose.model('Collection', collectionSchema);

// Exporting the 'Collection' model so it can be used in other parts of the application
module.exports = Collection;


