const express = require('express');
const router = express.Router();
const Registration = require('../models/registration');
const User = require('../models/user');
var nodemailer = require("nodemailer");
var ObjectId = require('mongoose').Types.ObjectId;

router.get('/checkRegistration/:event_id/:user_id', (req, res) => {
    Registration.countDocuments({
        user_id: req.params.user_id,
        event_id: req.params.event_id
    }, (err) => {
        if (err) {
            res.json({
                error: true,
                msg: err
            })
        }
    }).then((docs) => {
        if (docs.length != 0) {
            res.json({
                error: false,
                registered: true,
                msg: 'Already Registered!'
            })
        } else {
            Registration.find({
                user_id: req.params.user_id,
                event_id: {
                    $ne: req.params.event_id
                }
            }).populate('event_id').populate({
                path: 'event_id',
                populate: {
                    path: 'category_id'
                }
            }).then((newDocs) => {
                Event.findById(req.params.event_id).then((records) => {
                    if (newDocs.length == 0) {
                        res.json({
                            error: false,
                            registered: false,
                            msg: 'You can Register'
                        })
                    } else if (records.start_time == newDocs[0].event_id.start_time) {
                        res.json({
                            error: false,
                            registered: true,
                            msg: 'Cannot Register. You have a parallel Event'
                        })
                    } else {
                        res.json({
                            error: false,
                            registered: false,
                            msg: 'You can Register'
                        })
                    }
                })
            })
        }
    })
});

router.post('/newWorkshopRegistration', (req, res) => {
    let newRegistration = new Registration({
            event_id: req.body.event_id,
            user_id: req.body.user_id,
            registration_type: req.body.registration_type,
            participation: 'Absent'
        })
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
            user_id: req.body.user_id,
            registration_type: req.body.registration_type,
            participation: req.body.participation
        })
    } else {
        newRegistration = new Registration({
            event_id: req.body.event_id,
            user_id: req.body.user_id,
            registration_type: req.body.registration_type,
            participation: req.body.participation
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

router.delete('/:id', (req, res) => {
    Registration.findByIdAndRemove(req.params.id, (err, docs) => {
        if (err) {
            res.json({
                error: true,
                msg: 'Unable to cancel your registration. Try again'
            })
        } else {
            res.json({
                error: false,
                msg: 'Registration removed!'
            })
        }
    })
});

router.put('/:id', (req,res)=>{

    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);
    var newParticipation = {
        participation: req.body.participation
    };

    Registration.findByIdAndUpdate(req.params.id, { $set: newParticipation }, { new: true },(err,docs)=>{
        if (!err) {
            res.json({ error: false, msg: "Attendance updated" });
        }
        else {
            res.json({ error: true, msg: "Failed To Update Attendance" + err });
        }
    })
});

router.get('/events/:id', function (req, res, next) {
    Registration.find({
        event_id: req.params.id
    }).populate('user_id').exec((err, docs) => {
        if (err) {
            res.json({
                error: true,
                msg: err
            });
        } else {
            res.json(docs);
        }
    });
});


router.get('/:email',function(req ,res, next) {
    User.getUserByEmailId(req.params.email,(err, docs) => {
        if (err) {
            res.json({
                error: true,
                msg: err
            });
        } else {
            res.json(docs);
        }
    });
});

module.exports = router;