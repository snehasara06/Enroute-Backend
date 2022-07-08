const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const flightDetail=require('../Models/flightDetail')
router.post('/', async (req, res) => {
    try {
        const flightdetail = new flightDetail(req.body)
        await flightdetail.save()
        res.send(flightdetail)
    }
    catch (err) {
        console.log('Error in Posting Flight Summary:' + JSON.stringify(err, undefined, 2));
    }
})


module.exports = router;