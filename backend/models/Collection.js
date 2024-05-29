const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
    collection_id: { type: Number, required: true },
    collection_name: { type: String, required: true }
});

const Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection;
