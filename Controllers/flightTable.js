const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const { FlightTable } = require('../Models/flightTable');;
//localhost:8080/flightTable/
router.get('/', async (req, res) => {

    try {
        const flights = await FlightTable.find()
        res.send(flights);
        console.log("get method")
        console.log(flights);
    }
    catch (err) {
        console.log('Error in retriving FlightTable:' + JSON.stringify(err, undefined, 2));
    }
})

router.post('/', async (req, res) => {
    try {
        const flights = new FlightTable(req.body)
        await flights.save()
        res.send(flights)
    }
    catch (err) {
        console.log('Error in Posting FlightTable:' + JSON.stringify(err, undefined, 2));
    }
})


module.exports = router;