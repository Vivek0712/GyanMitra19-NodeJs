const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/env');
const User = require('../models/user');
var nodemailer = require("nodemailer");

//Fill up mail details and proceed
let smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "saravind23399@gmail.com",
        pass: "Aravindiam29#"
    }
});

//Create Registration User
router.post('/create', (req, res, next) => {
    let rand = Math.floor((Math.random() * 1000000));
    let newUser = new User({
        name: req.body.name,
        college_id: req.body.college_id,
        department_id: req.body.department_id,
        degree_id: req.body.degree_id,
        email_id: req.body.email_id,
        year: req.body.year,
        gender: req.body.gender,
        mobile_number: req.body.mobile_number,
        confirmed: false,
        activated: req.body.activated,
        type: req.body.type,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to register user' + err });
        } else {
            res.json({ success: true, msg: 'User Activated' });            
        }
    });
});

router.post('/activate',function(req, res, next){
    let host=req.get('host');
    let id = "",hashValue="";
    rand = Math.floor((Math.random() * 100000));
    User.getUserByEmailId(req.body.email_id , (err, result) => {
        id=result;
    });
    console.log(id);
    bcrypt.hash(id, 5, function(err, hash) {
        User.update(req.body.email_id,{$set: {activation_code: hash}});  
        hashValue = hash;      
    });
    let link="http://"+req.get('host')+"/verify?id="+id+"&hash="+hashValue;
    let mailOptions={
        to : req.body.email_id,
        subject : "Please confirm your Email account",
        html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to Activate</a>" 
    }
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            res.json({ success: false, msg: 'Failed to register user' + error });
        }
        else{
            console.log("Message sent: " + response.message);
            res.json({ success: true, msg: 'User Registered<br>Activation Mail sent' });
        }
    });
});

router.get('/verify',function(req, res, next){
    let id = req.query.id ? req.query.id : 1;
    if (!ObjectId.isValid(id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${id}`);

    var user = {
        activated: true
    };
    User.compareActivationCode(req.query.id,req.query.hash,function(err,result){
        if(err){
            res.json({ success: false, msg: 'Invalid link' });
        }
        else{
            User.findByIdAndUpdate(id, { $set: user }, { new: true }, (err, doc) => {
                if (!err) {
                    res.json({ success: false, msg: 'Activation code is invalid' });
                } else {
                    res.json({ success: true, msg: "Your Account is Activated" });
                }
            });
        }
    });
});

//Read Registered User
router.get('/', function(req, res, next) {
    let page = req.query.page ? req.query.page : 1;
    User.find({ type: 'user' }).limit(config.pagination.perPage).skip(page).exec((err, docs) => {
        if (!err) {
            res.send(docs);
        } 
        else {
            res.send(err);
        }
    });
});

module.exports = router;