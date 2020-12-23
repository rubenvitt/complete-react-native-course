const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const {JWT_KEY} = require("../const/jwt.const");
const User = mongoose.model('User');

const router = express.Router();


router.post('/signup', (async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = new User({
            email: email,
            password: password
        });
        await user.save();

        const token = jwt.sign({userId: user._id}, JWT_KEY);
        res.send({token: token});
    } catch (e) {
        return res.status(422).send(e.message);
    }
}));

router.post('/signin', (async (req, res) => {
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            return res.status(422).send({error: 'Must provide email and password'});
        }

        const user = await User.findOne({email});
        if (!user) {
            return res.status(422).send({error: 'Invalid mail or password'});
        }

        await user.comparePassword(password);
        const token = jwt.sign({userId: user._id}, JWT_KEY);

        return res.send({token: token});

    } catch (e) {
        return res.status(422).send({error: 'Invalid mail or password'});
    }
}))

module.exports = router;
