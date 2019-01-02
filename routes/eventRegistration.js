const express = require('express');
const router = express.Router();
const config = require('../config/env');
const Registration = require('../models/registration');
var nodemailer = require("nodemailer");
var ObjectId = require('mongoose').Types.ObjectId;

router.get('/checkWorkshopRegistration/:event_id/:user_id', (req, res) => {
    Registration.countDocuments({
        user_id: req.params.user_id,
        event_id: req.params.event_id
    }, (err, count) => {
        if (err) {
            res.json({
                error: true,
                msg: err
            })
        } else {
            if (count == 0) {
                res.json({
                    error: false,
                    registered: false,
                    msg: 'You can Register!'
                })
            } else {
                res.json({
                    error: false,
                    registered: true,
                    msg: 'Already Registered!'
                })
            }
        }
    })
})

router.post('/newWorkshopRegistration', (req, res) => {
    let newRegistration = undefined;

    if (req.body.registration_type == 'Team') {
        newRegistration = new Registration({
            event_id: req.body.event_id,
            team_id: req.body.team_id,
            registration_type: req.body.registration_type
        })
    } else {
        newRegistration = new Registration({
            event_id: req.body.event_id,
            user_id: req.body.user_id,
            registration_type: req.body.registration_type
        })
    }
    newRegistration.save((err, doc) => {
        if (err) {
            res.json({
                error: true,
                msg: err
            })
        } else {
            res.json({
                error: false,
                msg: 'Successfully Registered!'
            })
        }
    });
});


router.post('/newEventRegistration', (req, res) => {
    let newRegistration = undefined;

    if (req.body.registration_type == 'Team') {
        newRegistration = new Registration({
            event_id: req.body.event_id,
            team_id: req.body.team_id,
            registration_type: req.body.registration_type
        })
    } else {
        newRegistration = new Registration({
            event_id: req.body.event_id,
            user_id: req.body.user_id,
            registration_type: req.body.registration_type
        })
    }

    newRegistration.save((err, doc) => {
        if (err) {
            res.json({
                error: true,
                msg: err
            })
        } else {
            res.json({
                error: false,
                msg: 'Successfully Registered!'
            })
        }
    });
});
router.get('/', function(req, res, next) {
    let page = req.query.page ? req.query.page : 1;
    if(page==0){
        Registration.find({}, (err, docs)=> {
            if(err){
                res.json({ error: true, msg: err });
            }
            else{
                res.json(docs);
            }
        });
        }
    else {
        Registration.getAllRegistrations(page, (err, docs) => {
            if (!err) {
                res.send(docs);
            } else {
                res.json({ error: true, msg: err });
            }
        });
    }
});
module.exports = router;