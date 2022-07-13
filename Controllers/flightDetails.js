const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const flightDetail=require('../Models/flightDetail')
router.post('/', (req, res) => {
    // try {
    //     const flightdetail = new flightDetail(req.body)
    //     await flightdetail.save()
    //     res.send(flightdetail)
    // }
    // catch (err) {
    //     console.log('Error in Posting Flight Summary:' + JSON.stringify(err, undefined, 2));
    // }
        console.log("flight summary")
        console.log(req.body.firstname);
        var detail=new flightDetail({
           firstname: req.body.firstname,
            lastname: req.body.lastname,
            departure: req.body.departure,
            arrival: req.body.arrival,
            from: req.body.from,
            to: req.body.to
        });
        
        detail.save((err,docs)=>{
        if(!err)
        // res.send(docs);
        res.status(200).json({msg:'Created Successfully'})
        else
        console.log('post Error in Flight summary : '+JSON.stringify(err,undefined,2));
        });
        
        }
)


module.exports = router;