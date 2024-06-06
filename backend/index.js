// Author : Alphy Baby
// Last revised : 06-06-2024

const express = require('express'); // Import Express framework
const mongoose = require('mongoose'); // Import Mongoose for MongoDB interaction
const bodyParser = require('body-parser'); // Import body-parser for parsing request bodies
const cors = require('cors'); // Import cors middleware

// Import Mongoose models for various collections
const Artifact = require('./models/Artifact');
const TypeOfArtifact = require('./models/TypeOfArtifact');
const Painter = require('./models/Painter');
const Chapter = require('./models/Chapter');
const ArtifactType = require('./models/Artifact_to_TypeOfArtifact');
const ArtifactPainter = require('./models/ArtifactPainter');
const ArtifactChapter = require('./models/ArtifactChapter');
const Location = require('./models/Location');
const Collection = require('./models/Collection');

const app = express(); // Create an Express application

app.use(bodyParser.json()); // Use body-parser to parse JSON bodies
app.use(cors()); // Enable CORS for all routes

const uri = 'mongodb+srv://alphybaby22:U3PskhAddREzZqBf@tendalldatabase.eatfpxi.mongodb.net/trendallRepository'; // MongoDB connection URI

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB')) // Log success message on connection
    .catch(err => console.error('Error connecting to MongoDB', err)); // Log error message on failure

let lastResponse = null; // Variable to store the last response for pagination

/**
 * POST /search-artifacts
 * This endpoint allows searching for artifacts based on artifact type, painter, and chapter names.
 * 
 * Request body parameters:
 * - artifact_type_name (array of strings): Names of artifact types to filter by
 * - painter_name (array of strings): Names of painters to filter by
 * - chapter_name (array of strings): Names of chapters to filter by
 * 
 * Response:
 * - JSON object containing an array of artifacts and the total length
 */
app.post('/search-artifacts', async (req, res) => {
    const { artifact_type_name, painter_name, chapter_name } = req.body;
    
    try {
        const sanitizedFilters = {
            artifact_type_name: artifact_type_name ?? [],
            painter_name: painter_name ?? [],
            chapter_name: chapter_name ?? []
        };

        // Build the match conditions based on the filter criteria
        const matchConditions = {};
        if (sanitizedFilters.artifact_type_name.length > 0) matchConditions['types.artifact_type_name'] = { $in: sanitizedFilters.artifact_type_name };
        if (sanitizedFilters.painter_name.length > 0) matchConditions['painters.painter_name'] = { $in: sanitizedFilters.painter_name };
        if (sanitizedFilters.chapter_name.length > 0) matchConditions['chapters.chapter_name'] = { $in: sanitizedFilters.chapter_name };

        // Build the aggregation pipeline
        const pipeline = [
            {
                $lookup: {
                    from: 'artifact_to_typeofartifacts',
                    localField: 'artifact_id',
                    foreignField: 'artifact_id',
                    as: 'artifact_types'
                }
            },
            {
                $lookup: {
                    from: 'artifactchapters',
                    localField: 'artifact_id',
                    foreignField: 'artifact_id',
                    as: 'artifact_chapters'
                }
            },
            {
                $lookup: {
                    from: 'artifactpainters',
                    localField: 'artifact_id',
                    foreignField: 'artifact_id',
                    as: 'artifact_painters'
                }
            },
            {
                $lookup: {
                    from: 'typeofartifacts',
                    localField: 'artifact_types.artifact_type_id',
                    foreignField: 'artifact_type_id',
                    as: 'types'
                }
            },
            {
                $lookup: {
                    from: 'chapters',
                    localField: 'artifact_chapters.chapter_id',
                    foreignField: 'chapter_id',
                    as: 'chapters'
                }
            },
            {
                $lookup: {
                    from: 'painters',
                    localField: 'artifact_painters.painter_id',
                    foreignField: 'painter_id',
                    as: 'painters'
                }
            },
            {
                $addFields: {
                    artifact_type_names: '$types.artifact_type_name',
                    chapter_names: '$chapters.chapter_name',
                    painter_names: '$painters.painter_name'
                }
            },
            {
                $match: matchConditions // Apply the dynamic match conditions
            }
        ];

        const artifacts = await Artifact.aggregate(pipeline); // Execute the aggregation pipeline
        lastResponse = artifacts; // Store the result in lastResponse for pagination
        const length = lastResponse.length; // Get the total length of the results
        const responseObj = {
            artifacts: artifacts.slice(0, 10), // Return the first 10 results
            length: length // Total number of results
        };

        res.json(responseObj); // Send the response
    } catch (err) {
        console.error(err); // Log any errors
        res.status(500).send('Server error'); // Send a server error response
    }
});

/**
 * POST /getpage
 * This endpoint allows pagination of the previously searched artifacts.
 * 
 * Request body parameters:
 * - pageno (number): The page number to retrieve
 * - reset (boolean): Whether to reset the pagination state
 * 
 * Response:
 * - JSON object containing the data for the requested page
 * - or a status message if resetting or an error occurs
 */
app.post('/getpage', async (req, res) => {
    const { pageno, reset } = req.body;

    try {
        if (reset) {
            lastResponse = null; // Reset the lastResponse
            return res.send("reset"); // Send reset confirmation
        }

        if (lastResponse !== null) {
            const length = lastResponse.length; // Get the total length of the results
            const totalpages = Math.ceil(length / 10); // Calculate the total number of pages

            // Ensure pageno is within valid range
            if (pageno < 1 || pageno > totalpages) {
                return res.status(400).send("Invalid page number"); // Send an error for invalid page number
            }

            const startindex = (pageno - 1) * 10; // Calculate the start index for the page
            const endindex = startindex + 10; // Calculate the end index for the page

            // Return the sliced array for the requested page
            const pageData = lastResponse.slice(startindex, endindex);

            return res.json({
                data: pageData // Send the data for the requested page
            });
        } else {
            // Handle the case where lastResponse is null
            return res.status(404).send("No data available"); // Send an error if no data is available
        }
    } catch (error) {
        console.error(error); // Log any errors
        res.status(500).send("An error occurred"); // Send a server error response
    }
});

/**
 * GET /servercheck
 * This endpoint is used to check if the server is running.
 * 
 * Response:
 * - Status 200 and a message indicating the server is running
 */
app.get('/servercheck', (req, res) => {
    res.status(200).send('Server is up and running!');
});

// Start the server on the specified port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
