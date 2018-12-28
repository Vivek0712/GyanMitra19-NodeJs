const express = require('express');
const router = express.Router();
const config = require('../config/env');
const User = require('../models/user');
var nodemailer = require("nodemailer");
var ObjectId = require('mongoose').Types.ObjectId;
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

    let newUser = new User({
        name: req.body.name,
        college_id: req.body.college_id,
        department_id: req.body.department_id,
        degree_id: req.body.degree_id,
        email_id: req.body.email_id,
        year_id: req.body.year_id,
        gender: req.body.gender,
        mobile_number: req.body.mobile_number,
        confirmed: false,
        activated: req.body.activated,
        type: req.body.type,
        password: req.body.password,
        registration_mode: req.body.registration_mode
    });

    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({
                success: false,
                msg: 'Failed to register user' + err
            });
        } else {
            /*res.json({
                success: true,
                msg: 'User Activated'
            });*/
            User.activationCode(newUser, (err2, activationUser) => {
                if (err) {
                    res.json({
                        success: false,
                        msg: 'Failed to add activtionCode to user' + err2
                    });
                } else {
                    link = "http://localhost:4200/user/activate/" + activationUser._id + "/" + activationUser.activation_code;
                    let mailOptions = {
                        to: req.body.email_id,
                        subject: "Please confirm your Email account",
                        html: "Hello,<br> Please Click on the link to verify your email.<br><a href=" + link + ">Click here to Activate</a>"
                    }
                    smtpTransport.sendMail(mailOptions, function (error, response) {
                        if (error) {
                            res.json({
                                success: false,
                                msg: 'Failed to register user' + error
                            });
                        } else {
                            res.json({
                                success: true,
                                msg: 'User Registered Activation Mail has been sent'
                            });
                        }
                    });
                }
            })
        }
    });
});

router.post('/activate', function (req, res, next) {
    const user_id = req.body._id;
    const activation_code = req.body.activation_code;
    if (!ObjectId.isValid(user_id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${user_id}`);

    User.findById(user_id, (err, user) => {
        if (err) throw err;
        if (user.activated) {
            res.json({
                success: true,
                msg: 'Your Already Activated'
            });
        } else {
            if (user.activation_code == activation_code) {
                user.activated = true;
                user.save(function (err, newUser) {
                    if (err) {
                        res.json({
                            success: false,
                            msg: 'Not Updated'
                        });
                    } else {
                        res.json({
                            success: false,
                            msg: 'Activated ThankYou!!'
                        });
                    }
                })
            }
        }


    });
});
//Read Registered User
router.get('/', function (req, res, next) {
    let page = req.query.page ? req.query.page : 1;
    User.find({
        type: 'user'
    }).limit(config.pagination.perPage).skip(page).exec((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            res.send(err);
        }
    });
});

module.exports = router;