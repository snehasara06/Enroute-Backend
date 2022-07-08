const express = require('express');
const router = express.Router();
const objectId = require('mongoose').Types.ObjectId;
const { Flight } = require('../Models/flight.js');
const { isAuthenticatedUser } = require('../Middlewares/auth')
// localhost:3000/flightData/
router.get('/', (req, res) => {

    try {
        const flights = Flight.find()
        res.send(flights);
        console.log(flights);
    }
    catch (err) {
        console.log('Error in retrieving flight data:' + JSON.stringify(err, undefined, 2));
    }

});

// POST METHOD WORKS
router.post('/', (req, res) => {
    var fly = new Flight({
        name: req.body.name,
        departure: req.body.departure,
        arrival: req.body.arrival,
    });
    fly.save((err, doc) => {
        // console.log("POST from flightController ", name)
        if (!err) { res.send(doc); }
        else { console.log('Error response save:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:_id', (req, res) => {
    console.log("Get method");
    Flight.find({ _id: req.params._id }, (err, doc) => {

    })
    if (!objectId.isValid(req.params._id))
        return res.status(400).send(`No record with given _id:${req.params._id}`);

    Flight.findById(req.params._id, (err, doc) => {
        if (!err) {
            res.send(doc);
        }
        else {
            console.log('Error in retriving flight data:' + JSON.stringify(err, undefined, 2))
        }
    })
});

router.put('/:id', (req, res) => {
    if (!objectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id:${req.params.id}`);
    var fly = {
        name: req.body.name,
        departure: req.body.departure,
        arrival: req.body.arrival
    };
    Flight.findByIdAndUpdate(req.params.id, { $set: fly }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Flight update:' + JSON.stringify(err, undefined, 2)); }
    });
});
router.delete('/:id', (req, res) => {
    if (!objectId.isValid(req.params.id)) {
        return res.status(400).send(`No record with the given id:${req.params.id}`);
    }

    Flight.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Flight delete:' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;