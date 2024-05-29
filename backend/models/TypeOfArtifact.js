const mongoose = require('mongoose');

const typeOfArtifactSchema = new mongoose.Schema({
    artifact_type_id: { type: Number, required: true },
    artifact_type_name: { type: String, required: true }
});

const TypeOfArtifact = mongoose.model('TypeOfArtifact', typeOfArtifactSchema);

module.exports = TypeOfArtifact;
