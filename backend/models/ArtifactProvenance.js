const mongoose = require('mongoose');

const artifactProvenanceSchema = new mongoose.Schema({
    artifact_id: { type: Number, required: true },
    location_id: { type: Number, required: true }
});

const ArtifactProvenance = mongoose.model('ArtifactProvenance', artifactProvenanceSchema);

module.exports = ArtifactProvenance;
