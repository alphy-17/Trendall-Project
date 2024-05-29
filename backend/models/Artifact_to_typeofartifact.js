const mongoose = require('mongoose');

const artifact_to_TypeOfArtifactSchema = new mongoose.Schema({
    artifact_id: { type: Number, required: true },
    artifact_type_id: { type: Number, required: true }
});

const ArtifactType = mongoose.model('Artifact_to_TypeOfArtifact', artifact_to_TypeOfArtifactSchema);

module.exports = ArtifactType;
