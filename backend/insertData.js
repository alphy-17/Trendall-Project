// Author : Alphy Baby
// Last revised : 06-06-2024

const mongoose = require('mongoose'); // Import mongoose library for MongoDB interactions

// Import models
const Artifact = require('./models/Artifact');
const TypeOfArtifact = require('./models/TypeOfArtifact');
const Painter = require('./models/Painter');
const Location = require('./models/Location');
const Collection = require('./models/Collection');
const Chapter = require('./models/Chapter');
const ArtifactType = require('./models/Artifact_to_TypeOfArtifact');
const ArtifactPainter = require('./models/ArtifactPainter');
const ArtifactProvenance = require('./models/ArtifactProvenance');
const ArtifactCollection = require('./models/ArtifactCollection');
const ArtifactChapter = require('./models/ArtifactChapter');
const fs = require('fs'); // File system module to read files

// MongoDB URI for connection
const uri = 'mongodb+srv://alphybaby22:U3PskhAddREzZqBf@tendalldatabase.eatfpxi.mongodb.net/trendallRepository';

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        // Uncomment the required function calls to insert data
        // insertData();
        // insertTypeOfArtifact();
        // insertPainter();
        // insertLocations();
        // insertCollections();
        // insertChapters();
        // insertArtifact_to_TypeOfArtifact();
        // insertArtifactPainters();
        // insertArtifactProvenances();
        // insertArtifactCollections();
        // insertArtifactChapters();
    })
    .catch(err => {
        console.error('Error connecting to MongoDB', err);
    });

/**
 * Inserts artifact data into the database from 'data.json'
 */
const insertData = async () => {
    try {
        const jsonData = fs.readFileSync('data.json', 'utf8'); // Read JSON file
        const data = JSON.parse(jsonData); // Parse JSON data
        const artifacts = data.Artifacts; // Extract artifacts array
        const result = await Artifact.insertMany(artifacts); // Insert artifacts into the database
        console.log('Data inserted:', result);
    } catch (err) {
        console.error('Error inserting data:', err);
    } finally {
        mongoose.connection.close(); // Close the database connection
    }
};

/**
 * Inserts type of artifact data into the database from 'TypeOfArtifact.json'
 */
const insertTypeOfArtifact = async () => {
    try {
        const jsonData = fs.readFileSync('TypeOfArtifact.json', 'utf8'); // Read JSON file
        const data = JSON.parse(jsonData); // Parse JSON data
        const typesOfArtifact = data.TypeOfArtifact; // Extract types of artifact array
        const result = await TypeOfArtifact.insertMany(typesOfArtifact); // Insert types of artifact into the database
        console.log('TypeOfArtifact data inserted:', result);
    } catch (err) {
        console.error('Error inserting TypeOfArtifact data:', err);
    } finally {
        mongoose.connection.close(); // Close the database connection
    }
};

/**
 * Inserts painter data into the database from 'painterdata.json'
 */
const insertPainter = async () => {
    try {
        const jsonData = fs.readFileSync('painterdata.json', 'utf8'); // Read JSON file
        const data = JSON.parse(jsonData); // Parse JSON data
        const painters = data.Painter; // Extract painters array
        const result = await Painter.insertMany(painters); // Insert painters into the database
        console.log('Painter data inserted:', result);
    } catch (err) {
        console.error('Error inserting Painter data:', err);
    } finally {
        mongoose.connection.close(); // Close the database connection
    }
};

/**
 * Inserts location data into the database from 'locationdata.json'
 */
const insertLocations = async () => {
    try {
        const jsonData = fs.readFileSync('locationdata.json', 'utf8'); // Read JSON file
        const data = JSON.parse(jsonData); // Parse JSON data
        const locations = data.Locations; // Extract locations array
        const result = await Location.insertMany(locations); // Insert locations into the database
        console.log('Locations data inserted:', result);
    } catch (err) {
        console.error('Error inserting Locations data:', err);
    } finally {
        mongoose.connection.close(); // Close the database connection
    }
};

/**
 * Inserts collection data into the database from 'collectiondata.json'
 */
const insertCollections = async () => {
    try {
        const jsonData = fs.readFileSync('collectiondata.json', 'utf8'); // Read JSON file
        const data = JSON.parse(jsonData); // Parse JSON data
        const collections = data.Collection; // Extract collections array
        const result = await Collection.insertMany(collections); // Insert collections into the database
        console.log('Collections data inserted:', result);
    } catch (err) {
        console.error('Error inserting Collections data:', err);
    } finally {
        mongoose.connection.close(); // Close the database connection
    }
};

/**
 * Inserts chapter data into the database from 'Chapterdata.json'
 */
const insertChapters = async () => {
    try {
        const jsonData = fs.readFileSync('Chapterdata.json', 'utf8'); // Read JSON file
        const data = JSON.parse(jsonData); // Parse JSON data
        const chapters = data.Chapters; // Extract chapters array
        const result = await Chapter.insertMany(chapters); // Insert chapters into the database
        console.log('Chapters data inserted:', result);
    } catch (err) {
        console.error('Error inserting Chapters data:', err);
    } finally {
        mongoose.connection.close(); // Close the database connection
    }
};

/**
 * Inserts artifact to type of artifact mapping data into the database from 'Artifact_TypeOfArtifact.json'
 */
const insertArtifact_to_TypeOfArtifact = async () => {
    try {
        const jsonData = fs.readFileSync('Artifact_TypeOfArtifact.json', 'utf8'); // Read JSON file
        const data = JSON.parse(jsonData); // Parse JSON data
        const artifactTypes = data.Artifact_TypeOfArtifact; // Extract artifact types array
        const result = await ArtifactType.insertMany(artifactTypes); // Insert artifact types into the database
        console.log('ArtifactType data inserted:', result);
    } catch (err) {
        console.error('Error inserting ArtifactType data:', err);
    } finally {
        mongoose.connection.close(); // Close the database connection
    }
};

/**
 * Inserts artifact painters data into the database from 'ArtifactPainter.json'
 */
const insertArtifactPainters = async () => {
    try {
        const jsonData = fs.readFileSync('ArtifactPainter.json', 'utf8'); // Read JSON file
        const data = JSON.parse(jsonData); // Parse JSON data
        const artifactPainters = data.Artifact_Painter; // Extract artifact painters array
        const result = await ArtifactPainter.insertMany(artifactPainters); // Insert artifact painters into the database
        console.log('ArtifactPainter data inserted:', result);
    } catch (err) {
        console.error('Error inserting ArtifactPainter data:', err);
    } finally {
        mongoose.connection.close(); // Close the database connection
    }
};

/**
 * Inserts artifact provenances data into the database from 'Artifact_Provenances.json'
 */
const insertArtifactProvenances = async () => {
    try {
        const jsonData = fs.readFileSync('Artifact_Provenances.json', 'utf8'); // Read JSON file
        const data = JSON.parse(jsonData); // Parse JSON data
        const artifactProvenances = data.Artifact_Provenances; // Extract artifact provenances array
        const result = await ArtifactProvenance.insertMany(artifactProvenances); // Insert artifact provenances into the database
        console.log('ArtifactProvenance data inserted:', result);
    } catch (err) {
        console.error('Error inserting ArtifactProvenance data:', err);
    } finally {
        mongoose.connection.close(); // Close the database connection
    }
};

/**
 * Inserts artifact collections data into the database from 'Artifact_to_collections.json'
 */
const insertArtifactCollections = async () => {
    try {
        const jsonData = fs.readFileSync('Artifact_to_collections.json', 'utf8'); // Read JSON file
        const data = JSON.parse(jsonData); // Parse JSON data
        const artifactCollections = data.Artifact_Collection; // Extract artifact collections array
        const result = await ArtifactCollection.insertMany(artifactCollections); // Insert artifact collections into the database
        console.log('ArtifactCollection data inserted:', result);
    } catch (err) {
        console.error('Error inserting ArtifactCollection data:', err);
    } finally {
        mongoose.connection.close(); // Close the database connection
    }
};

/**
 * Inserts artifact chapters data into the database from 'Artifact_Chapter.json'
 */
const insertArtifactChapters = async () => {
    try {
        const jsonData = fs.readFileSync('Artifact_Chapter.json', 'utf8'); // Read JSON file
        const data = JSON.parse(jsonData); // Parse JSON data
        const artifactChapters = data.Artifact_Chapter; // Extract artifact chapters array
        const result = await ArtifactChapter.insertMany(artifactChapters); // Insert artifact chapters into the database
        console.log('ArtifactChapter data inserted:', result);
    } catch (err) {
        console.error('Error inserting ArtifactChapter data:', err);
    } finally {
        mongoose.connection.close(); // Close the database connection
    }
};
