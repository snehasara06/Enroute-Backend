const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./db.js');
const verifyToken=require('../Travel-Backend/Routes/api')
const app = express();
app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:4200'
}));

var flightTable = require('./Controllers/flightTable.js');
app.use('/flightTable', verifyToken,flightTable);

var dropDown = require('./Controllers/dropDown.js')
app.use('/dropDown',verifyToken, dropDown);

var api = require('../Travel-Backend/Routes/api');
app.use('/api',verifyToken, api)

var flightDetails=require('./Controllers/flightDetails.js')
app.use('/flightDetails', verifyToken,flightDetails);


const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server running on localhost:" + PORT)
})


