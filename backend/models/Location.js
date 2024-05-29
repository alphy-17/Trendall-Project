const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    location_id: { type: Number, required: true },
    location_name: { type: String, required: true }
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
