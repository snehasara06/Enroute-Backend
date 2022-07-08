const mongoose = require('mongoose');

var FlightTable = mongoose.model('FlightTable', {
    Time: { type: String },
    From: { type: String },
    To: { type: String },
    ETD: { type: String },
    Status: { type: String },
    Gate: { type: String }
});
module.exports = { FlightTable };