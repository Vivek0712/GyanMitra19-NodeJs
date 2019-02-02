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
    User.find({email_id:email_id}, (err, user) => {
        if (err) throw err;
        else if (user.length == 0) {
            return res.json({ success: false, email: false, msg: 'Register your account (or) Check your mail for activation ' + email_id });
        }
        else {
            User.comparePassword(password, user[0].password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                    const token = jwt.sign({ data: user[0] }, config.application.secret, {
                        expiresIn: 604800 // 1 week
                    });
                    res.json({
                        success: true,
                        email: true,
                        password: true,
                        token: 'JWT ' + token,
                        user: {
                            id: user[0]._id,
                            name: user[0].name,
                            email_id: user[0].email_id,
                            type: user[0].type,
                            gmID: user[0].gmID,
                            mobile_number: user[0].mobile_number,
                            cart_paid: user[0].cart_paid,
                            cart_confirmed: user[0].cart_confirmed
                        },
                        msg: 'YOUR LOGGED IN'
                    })
                } else {
                    return res.json({ success: false, password: false, msg: 'WRONG PASSWORD' });
                }
            });
        }
    });
});

// Get Current User Profile
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({ profile: req.user, success: true });
});

module.exports = router;