const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./db.js');
const jwt = require('jsonwebtoken');

const app = express();
app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:4200'
}));


var flightController = require('./Controllers/flightController.js');
app.use('/flightData', flightController);

var flightTable = require('./Controllers/flightTable.js');
app.use('/flightTable', flightTable);

var dropDown = require('./Controllers/dropDown.js')
app.use('/dropDown', dropDown);

var api = require('../Travel-Backend/Routes/api');
app.use('/api', api)

var flightDetails=require('./Controllers/flightDetails.js')
app.use('/flightDetails',flightDetails);

app.get('/', (req, res) => {
    res.send("Hai sneha!");
})
const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server running on localhost:" + PORT)
})
// app.listen(8080,()=>{
//     console.log('Server running at port: 8080')
// });


