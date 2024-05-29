const mongoose = require('mongoose');

const artifactChapterSchema = new mongoose.Schema({
    artifact_id: { type: Number, required: true },
    chapter_id: { type: Number, required: true }
});

const ArtifactChapter = mongoose.model('ArtifactChapter', artifactChapterSchema);

module.exports = ArtifactChapter;
