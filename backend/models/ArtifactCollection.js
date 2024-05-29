const mongoose = require('mongoose');

const artifactCollectionSchema = new mongoose.Schema({
    artifact_id: { type: Number, required: true },
    collection_id: { type: Number, required: true }
});

const ArtifactCollection = mongoose.model('ArtifactCollection', artifactCollectionSchema);

module.exports = ArtifactCollection;
