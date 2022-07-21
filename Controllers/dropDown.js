const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

var { dropDown } = require('../Models/dropDown');;
//localhost:8080/dropDown/
router.get('/', async (req, res) => {

    try {
        const dropList = await dropDown.find()
        res.send(dropList);
    }
    catch (err) {
        res.status(400).json({ err })
    }
})

router.post('/', async (req, res) => {
    try {
        const dropList = new dropDown(req.body)
        await dropList.save()
        res.send(dropList)
    }
    catch (err) {
        res.status(400).json({ err })
    }
})


module.exports = router;