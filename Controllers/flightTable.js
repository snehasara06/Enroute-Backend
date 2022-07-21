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

router.get('/:from/:to', async (req, res) => {

    try {
        console.log("From" + req.params.from);
        console.log("To" + req.params.to);
        const flights = await FlightTable.find({ From: req.params.from, To: req.params.to })
        console.log("length" + flights.length)
        if (flights.length == 0) {
            console.log("onnum illa")
            res.send({ msg: 'Not available' });
        }
        else {
            res.send(flights);
            console.log("get method")
            console.log(flights);
        }
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

router.get('/:id', async (req, res) => {
    try {
        console.log(req.params.id);
        await FlightTable.find({_id:req.params.id},(err,doc)=>{
            console.log(doc);
            res.status(200).json({data:doc});
        })
    }
    catch (err) {
        console.log('error in flight table id:' + err)
    }
})
module.exports = router;