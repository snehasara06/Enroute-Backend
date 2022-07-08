const mongoose = require('mongoose');

var dropDown = mongoose.model('dropDown', {
    departure: { type: String },

});
module.exports = { dropDown };