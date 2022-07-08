const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://SnehaS:Angel2000@cluster0.wurpy.mongodb.net/flightsTable?retryWrites=true&w=majority', (err) => {
    if (!err) {
        console.log("Connected successfully:)");
    }
    else {
        console.log("Error in connection:( " + JSON.stringify(err, undefined, 2));
    }
});
module.exports = mongoose;