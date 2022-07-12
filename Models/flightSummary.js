const mongoose = require('mongoose');

var FlightSummary = mongoose.model('FlightSummary', {
    firstname: { type: String },
    lastname: { type: String },
    departure: { type: String },
    arrival: { type: String },
    from: { type: String },
    to: { type: String }
});
module.exports = { FlightSummary }