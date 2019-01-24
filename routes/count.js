const express = require('express');
const router = express.Router();
const User = require('../models/user');
var ObjectId = require('mongoose').Types.ObjectId;
const Registration = require('../models/registration');

router.get('/registrations',function(req,res){
    User.find({},function(err,docs){
        res.send(docs.length);
    })
});

module.exports = router;