const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

var { dropDown } = require('../Models/dropDown');;
//localhost:8080/dropDown/
router.get('/', async (req, res) => {

    try {
        const dropList = await dropDown.find()
        res.send(dropList);
        console.log("get method")
        console.log(dropList);
    }
    catch (err) {
        console.log('Error in retriving dropDown:' + JSON.stringify(err, undefined, 2));
    }
})

router.post('/', async (req, res) => {
    try {
        const dropList = new dropDown(req.body)
        await dropList.save()
        res.send(dropList)
    }
    catch (err) {
        console.log('Error in Posting dropDown:' + JSON.stringify(err, undefined, 2));
    }
})


module.exports = router;