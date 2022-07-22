const express = require('express');
const router = express.Router();
const flightDetail=require('../Models/flightDetail')
router.post('/', (req, res) => {
 
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
        res.status(200).json({msg:'Created Successfully'})
        else
        res.status(400).json({ err })
        });
        
        }
)


module.exports = router;