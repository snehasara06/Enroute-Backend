const express = require('express');
const login = require('../Models/login');
const router = express.Router()
const mongoose = require('../db');
const jwt = require('jsonwebtoken')

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split('')[1]
    if (token === 'null') {
        return res.status(401).send('Unauthorized request');
    }
    let payload = jwt.verify(token, 'secretKey')
    if (!payload) {
        return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject;
    next()
}



router.post('/register', (req, res) => {
    let userData = req.body
    let user = new login(userData);
    user.save((error, registeredUser) => {
        if (error) {
            res.status(400).json({ error })
        }
        else {
            let payload = { subject: registeredUser._id }
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({ token })
        }
    })

})
router.post('/login', (req, res) => {
    login.find({ mailId: req.body.mailId }, { mailId: 1, password: 1, _id: 1 }, (err, doc) => {
        if (doc[0] == undefined) {
            res.status(401).json({ message: 'Invalid user...Please register' })
        }
        else if (doc[0].mailId == req.body.mailId && doc[0].password == req.body.password) {
            let payload = { subject: doc._id };
            let token = jwt.sign(payload, 'secretKey');
            res.status(200).send({ token });
        }
        else if (doc[0].mailId != req.body.mailId || doc[0].password != req.body.password) {
            res.status(401).json({ message: 'Username or password is invalid' })

        }
    })
})

module.exports = router;