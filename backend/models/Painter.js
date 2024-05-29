const mongoose = require('mongoose');

const painterSchema = new mongoose.Schema({
    painter_id: { type: Number, required: true },
    painter_name: { type: String, required: true }
});

const Painter = mongoose.model('Painter', painterSchema);

module.exports = Painter;
