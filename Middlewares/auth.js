const jwt = require('jsonwebtoken');
require('dotenv').config()
const data = require('../Models/login')

exports.isAuthenticatedUser = async (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).send("Access denied.Please login");
    }
    const token = req.headers.authorization.split(' ')[1]
    console.log(token);
    if (token === 'null') {
        return res.status(401).send("Access denied.Please login");
    }
    const userdata = jwt.verify(token, process.env.TOKEN_SECRET)
    if (!userdata) {
        return res.status(401).send("Access denied.Please login");
    }
    data = await data.findById(data.id)
    console.log(data);
    req.mailId = data.mailId;
    next()
}