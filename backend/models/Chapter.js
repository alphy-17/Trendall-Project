// Author : Alphy Baby
// Last revised : 06-06-2024

// Import the mongoose module
const mongoose = require('mongoose');

// Define the schema for a Chapter
// A schema in mongoose defines the structure of the documents within a collection
const chapterSchema = new mongoose.Schema({
    // Define a 'chapter_id' field of type Number which is required
    chapter_id: { type: Number, required: true },
    // Define a 'chapter_name' field of type String which is required
    chapter_name: { type: String, required: true }
});

// Create a model for the Chapter schema
// A model in mongoose provides an interface to the database for CRUD operations
const Chapter = mongoose.model('Chapter', chapterSchema);

/**
 * The Chapter model represents the 'chapters' collection in the database.
 * 
 * Parameters:
 * - chapter_id (Number): The unique identifier for the chapter. It is a required field.
 * - chapter_name (String): The name of the chapter. It is a required field.
 * 
 * Returns:
 * The Chapter model, which can be used to interact with the 'chapters' collection in the database.
 */

// Export the Chapter model so it can be used in other files
module.exports = Chapter;
