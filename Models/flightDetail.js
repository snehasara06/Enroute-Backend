const mongoose = require('mongoose');

var FlightDetail = mongoose.model('FlightDetail', {
    firstname: { type: String },
    lastname: { type: String },
    departure: { type: String },
    arrival: { type: String },
    from: { type: String },
    to: { type: String }
});
module.exports = { FlightDetail };