const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors middleware

const Artifact = require('./models/Artifact');
const TypeOfArtifact = require('./models/TypeOfArtifact');
const Painter = require('./models/Painter');
const Chapter = require('./models/Chapter');
const ArtifactType = require('./models/Artifact_to_TypeOfArtifact');
const ArtifactPainter = require('./models/ArtifactPainter');
const ArtifactChapter = require('./models/ArtifactChapter');
const Location = require('./models/Location');
const Collection = require('./models/Collection');

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

const uri = 'mongodb+srv://alphybaby22:U3PskhAddREzZqBf@tendalldatabase.eatfpxi.mongodb.net/trendallRepository';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB', err));

let lastResponse = null;

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

        const artifacts = await Artifact.aggregate(pipeline);
        lastResponse = artifacts
        const length = lastResponse.length;
        const responseObj = {
            artifacts: artifacts.slice(0, 10),
            length: length
        };
        const jsonString = JSON.stringify(responseObj.artifacts, null, 2);
        const filePath = 'data.json';
        res.json(responseObj);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
});

app.post('/getpage', async (req, res) => {
    const { pageno, reset } = req.body;

    try {
        if (reset) {
            lastResponse = null;
            return res.send("reset");
        }

        if (lastResponse !== null) {
            const length = lastResponse.length;
            const totalpages = Math.ceil(length / 10);

            // Ensure pageno is within valid range
            if (pageno < 1 || pageno > totalpages) {
                return res.status(400).send("Invalid page number");
            }

            const startindex = (pageno - 1) * 10;
            const endindex = startindex + 10;

            // Return the sliced array for the requested page
            const pageData = lastResponse.slice(startindex, endindex);

            return res.json({
                data: pageData
            });
        } else {
            // Handle the case where lastResponse is null
            return res.status(404).send("No data available");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred");
    }
});

app.get('/servercheck', (req, res) => {
    res.status(200).send('Server is up and running!');
  });

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
