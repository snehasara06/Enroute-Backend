const mongoose = require('mongoose');

var Flight = mongoose.model('Flight', {
    name: { type: String },
    date: { type: Date },
    departure: { type: String },
    arrival: { type: String }
});
module.exports = { Flight };