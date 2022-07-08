const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')


const login = new mongoose.Schema({

    mailId: {
        type: String,
        lowercase: true,
        required: true
    },
    password: {
        type: String
    }

})
module.exports = mongoose.model('login', login, 'Users')
