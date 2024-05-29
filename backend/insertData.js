const mongoose = require('mongoose'); //import mongoose library


const Artifact = require('./models/Artifact');
const TypeOfArtifact = require('./models/TypeOfArtifact')
const Painter = require('./models/Painter')
const Location  = require('./models/Location')
const Collection = require('./models/Collection')
const Chapter = require('./models/Chapter')
const ArtifactType = require('./models/Artifact_to_typeofartifact')
const ArtifactPainter = require('./models/ArtifactPainter');
const ArtifactProvenance = require('./models/ArtifactProvenance');
const ArtifactCollection = require('./models/ArtifactCollection');
const ArtifactChapter = require('./models/ArtifactChapter');
const fs = require('fs');

const uri = 'mongodb+srv://alphybaby22:U3PskhAddREzZqBf@tendalldatabase.eatfpxi.mongodb.net/trendallRepository';

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        //insertData();
        //insertTypeOfArtifact()
        //insertPainter();
        //insertLocations();
        //insertCollections();
        //insertChapters();
        //insertArtifact_to_TypeOfArtifact();
        //insertArtifactPainters();
        //insertArtifactProvenances();
        //insertArtifactCollections();
        //insertArtifactChapters();
    })
    .catch(err => {
        console.error('Error connecting to MongoDB', err);
    });

const insertData = async () => {
    try {
        // Read the JSON file
        const jsonData = fs.readFileSync('data.json', 'utf8');
        
        // Parse the JSON data
        const data = JSON.parse(jsonData);
        const artifacts = data.Artifacts; // Assuming "Artifacts" is the key containing the array of artifacts
        
        // Insert the data into the database
        const result = await Artifact.insertMany(artifacts);
        
        console.log('Data inserted:', result);
    } catch (err) {
        console.error('Error inserting data:', err);
    } finally {
        mongoose.connection.close();
    }
};


const insertTypeOfArtifact = async () => {
    try {
        // Read the JSON file
        const jsonData = fs.readFileSync('TypeOfArtifact.json', 'utf8');
        
        // Parse the JSON data
        const data = JSON.parse(jsonData);
        const typesOfArtifact = data.TypeOfArtifact; // Assuming "TypeOfArtifact" is the key containing the array
        
        // Insert the data into the database
        const result = await TypeOfArtifact.insertMany(typesOfArtifact);
        
        console.log('TypeOfArtifact data inserted:', result);
    } catch (err) {
        console.error('Error inserting TypeOfArtifact data:', err);
    } finally {
        mongoose.connection.close();
    }
};

const insertPainter = async () => {
    try {
        // Read the JSON file
        const jsonData = fs.readFileSync('painterdata.json', 'utf8');
        
        // Parse the JSON data
        const data = JSON.parse(jsonData);
        const painters = data.Painter; // Assuming "Painter" is the key containing the array
        
        // Insert the data into the database
        const result = await Painter.insertMany(painters);
        
        console.log('Painter data inserted:', result);
    } catch (err) {
        console.error('Error inserting Painter data:', err);
    } finally {
        mongoose.connection.close();
    }
};

const insertLocations = async () => {
    try {
        // Read the JSON file
        const jsonData = fs.readFileSync('locationdata.json', 'utf8');
        
        // Parse the JSON data
        const data = JSON.parse(jsonData);
        const locations = data.Locations; // Assuming "Locations" is the key containing the array
        
        // Insert the data into the database
        const result = await Location.insertMany(locations);
        
        console.log('Locations data inserted:', result);
    } catch (err) {
        console.error('Error inserting Locations data:', err);
    } finally {
        mongoose.connection.close();
    }
};

const insertCollections = async () => {
    try {
        // Read the JSON file
        const jsonData = fs.readFileSync('collectiondata.json', 'utf8');
        
        // Parse the JSON data
        const data = JSON.parse(jsonData);
        const collections = data.Collection; // Assuming "Collection" is the key containing the array
        
        // Insert the data into the database
        const result = await Collection.insertMany(collections);
        
        console.log('Collections data inserted:', result);
    } catch (err) {
        console.error('Error inserting Collections data:', err);
    } finally {
        mongoose.connection.close();
    }
};

const insertChapters = async () => {
    try {
        // Read the JSON file
        const jsonData = fs.readFileSync('Chapterdata.json', 'utf8');
        
        // Parse the JSON data
        const data = JSON.parse(jsonData);
        const chapters = data.Chapters; // Assuming "Chapters" is the key containing the array
        
        // Insert the data into the database
        const result = await Chapter.insertMany(chapters);
        
        console.log('Chapters data inserted:', result);
    } catch (err) {
        console.error('Error inserting Chapters data:', err);
    } finally {
        mongoose.connection.close();
    }
};

const insertArtifact_to_TypeOfArtifact = async () => {
    try {
        // Read the JSON file
        const jsonData = fs.readFileSync('Artifact_TypeOfArtifact.json', 'utf8');
        
        // Parse the JSON data
        const data = JSON.parse(jsonData);
        const artifactTypes = data.Artifact_TypeOfArtifact; // Assuming "Artifact_TypeOfArtifact" is the key containing the array
        
        // Insert the data into the database
        const result = await ArtifactType.insertMany(artifactTypes);
        
        console.log('ArtifactType data inserted:', result);
    } catch (err) {
        console.error('Error inserting ArtifactType data:', err);
    } finally {
        mongoose.connection.close();
    }
};

const insertArtifactPainters = async () => {
    try {
        // Read the JSON file
        const jsonData = fs.readFileSync('ArtifactPainter.json', 'utf8');
        
        // Parse the JSON data
        const data = JSON.parse(jsonData);
        const artifactPainters = data.Artifact_Painter; // Assuming "Artifact_Painter" is the key containing the array
        
        // Insert the data into the database
        const result = await ArtifactPainter.insertMany(artifactPainters);
        
        console.log('ArtifactPainter data inserted:', result);
    } catch (err) {
        console.error('Error inserting ArtifactPainter data:', err);
    } finally {
        mongoose.connection.close();
    }
};

const insertArtifactProvenances = async () => {
    try {
        // Read the JSON file
        const jsonData = fs.readFileSync('Artifact_Provenances.json', 'utf8');
        
        // Parse the JSON data
        const data = JSON.parse(jsonData);
        const artifactProvenances = data.Artifact_Provenances; // Assuming "Artifact_Provenances" is the key containing the array
        
        // Insert the data into the database
        const result = await ArtifactProvenance.insertMany(artifactProvenances);
        
        console.log('ArtifactProvenance data inserted:', result);
    } catch (err) {
        console.error('Error inserting ArtifactProvenance data:', err);
    } finally {
        mongoose.connection.close();
    }
};

const insertArtifactCollections = async () => {
    try {
        // Read the JSON file
        const jsonData = fs.readFileSync('Artifact_to_collections.json', 'utf8');
        
        // Parse the JSON data
        const data = JSON.parse(jsonData);
        const artifactCollections = data.Artifact_Collection; // Assuming "Artifact_Collection" is the key containing the array
        
        // Insert the data into the database
        const result = await ArtifactCollection.insertMany(artifactCollections);
        
        console.log('ArtifactCollection data inserted:', result);
    } catch (err) {
        console.error('Error inserting ArtifactCollection data:', err);
    } finally {
        mongoose.connection.close();
    }
}; 

const insertArtifactChapters = async () => {
    try {
        // Read the JSON file
        const jsonData = fs.readFileSync('Artifact_Chapter.json', 'utf8');
        
        // Parse the JSON data
        const data = JSON.parse(jsonData);
        const artifactChapters = data.Artifact_Chapter; // Assuming "Artifact_Chapter" is the key containing the array
        
        // Insert the data into the database
        const result = await ArtifactChapter.insertMany(artifactChapters);
        
        console.log('ArtifactChapter data inserted:', result);
    } catch (err) {
        console.error('Error inserting ArtifactChapter data:', err);
    } finally {
        mongoose.connection.close();
    }
};