const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/env');
const User = require('../models/user');


//Create Admin User
router.post('/create', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email_id: req.body.email_id,
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


//Read Admin
router.get('/', function(req, res, next) {
    console.log('hello');
    let page = req.query.page ? req.query.page : 1;
    User.find({ type: 'admin' }).skip(config.pagination.perPage * (page - 1)).limit(config.pagination.perPage).exec((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log(err);
        }

    });
    /*   User.getAllUsers(page, (err, docs) => {
         console.log('hello');
         if (!err) {
             res.send(docs);
         } else {
             res.json({ error: true, msg: err });
         }
     });*/
});
router.get('/read', function(req, res, next) {
    let page = req.query.page ? req.query.page : 1;
    User.getAllUsers(page, (err, docs) => {
        console.log('hello');
        if (!err) {
            res.send(docs);
        } else {
            res.json({ error: true, msg: err });
        }
    });
});
module.exports = router;