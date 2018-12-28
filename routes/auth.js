const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/env');
const User = require('../models/user');
var ObjectId = require('mongoose').Types.ObjectId;
//Login
router.post('/authenticate', (req, res, next) => {
    const email_id = req.body.email_id;
    const password = req.body.password;
    User.getUserByEmailId(email_id, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({ success: false, email: false, msg: 'USER NOT FOUND  ' + email_id });
        }
        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign({ data: user }, config.application.secret, {
                    expiresIn: 604800 // 1 week
                });
                res.json({
                    success: true,
                    email: true,
                    password: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        email_id: user.email_id,
                        type: user.type
                    },
                    msg: 'YOUR LOGGED IN'
                })
            } else {
                return res.json({ success: false, password: false, msg: 'WRONG PASSWORD' });
            }
        });
    });
});

// Get Current User Profile
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({ profile: req.user, success: true });
});

module.exports = router;