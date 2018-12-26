const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/env');
const User = require('../models/user');



//Create Registration User
router.post('/create', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        college_id: req.body.college_id,
        department_id: req.body.department_id,
        degree_id: req.body.degree_id,
        email_id: req.body.email_id,
        gender: req.body.gender,
        mobile_number: req.body.mobile_number,
        confirmed: false,
        activated: false,
        activation_code: Math.floor((Math.random() * 10000)),
        type: req.body.type,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to register user' + err });
        } else {
            res.json({ success: true, msg: 'User registered' });
        }
    });
});

//Read Registered User


router.get('/', function(req, res, next) {
    let page = req.query.page ? req.query.page : 1;
    User.find({ type: 'user' }).limit(config.pagination.perPage).skip(page).exec((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log(err);
        }

    });
});


module.exports = router;