const mongoose = require('mongoose');

const artifactPainterSchema = new mongoose.Schema({
    artifact_id: { type: Number, required: true },
    painter_id: { type: Number, required: true }
});

const ArtifactPainter = mongoose.model('ArtifactPainter', artifactPainterSchema);

module.exports = ArtifactPainter;
