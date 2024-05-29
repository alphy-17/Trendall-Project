const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema({
    chapter_id: { type: Number, required: true },
    chapter_name: { type: String, required: true }
});

const Chapter = mongoose.model('Chapter', chapterSchema);

module.exports = Chapter;
