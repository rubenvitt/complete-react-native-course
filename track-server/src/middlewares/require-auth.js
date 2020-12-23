const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const {JWT_KEY} = require("../const/jwt.const");
const User = mongoose.model('User');

module.exports = (req, res, next) => {
    const {authorization} = req.headers;

    if (!authorization) {
        return res.status(401).send({error: 'You must be logged in'});
    }

    const token = authorization.replace('Bearer ', '');
    jwt.verify(token, JWT_KEY, {}, async (err, payload) => {
        if(err) {
            return res.status(403).send({error: 'You must be logged in'});
        }

        const {userId} = payload;

        try {
            req.user = await User.findById(userId);
            next();
        } catch (e) {
            res.status(403).send({error: `Authentication failed with id: ${userId}`});
        }
    })
};
