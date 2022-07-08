const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const register = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mailId: {
        type: String,
        lowercase: true,
        required: true
    },
    pass1: {
        type: String
    }
})
module.exports = mongoose.model('register', register)