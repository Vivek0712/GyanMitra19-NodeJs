const express = require('express');
const router = express.Router();
const Registration = require('../models/registration');
const User = require('../models/user');
const Event = require('../models/event');
const Team = require('../models/team');
const TeamMember = require('../models/team_member');
const College = require('../models/college');
var ObjectId = require('mongoose').Types.ObjectId;

router.post('/newTeamEventRegistration', (req, res) => {
    if (req.body.position === "leader") {
        let newTeam = new Team({
            name: req.body.name,
            user_id: req.body.user_id
        })
        newTeam.save((err, res1) => {
            if (err) {
                res.json({
                    error: true,
                    msg: err
                })
            } else {
                Team.find({ name: req.body.name }, (err, res2) => {
                    let newTeamMember = new TeamMember({
                        user_id:req.body.user_id,
                        team_id: res2[0]._id
                    })
                    newTeamMember.save((err, res3) => {
                        if (err) {
                            res.json({
                                error: true,
                                msg: err
                            })
                        }
                        else {
                            let newRegistration = new Registration({
                                event_id: req.body.event_id,
                                user_id: req.body.user_id,
                                team_id: res2._id,
                                registration_type: "Team",
                                participation: "Absent",
                                status: "Not Confirmed"
                            })
                            newRegistration.save((err, res4) => {
                                if (err) {
                                    res.json({
                                        registered: false,
                                        msg: err
                                    });
                                }
                                else {
                                    res.json({
                                        registered: true,
                                        msg: "Team Leader registered sucessfully"
                                    })
                                }
                            });
                        }
                    })
                })
            }
        });
    }
    else {
        Team.find({ name: req.body.name }, (err, res1) => {
            if (err) {
                res.json({
                    error: true,
                    msg: err
                });
            }
            else {
                let newTeamMember = new TeamMember({
                    team_id: res1[0]._id,
                    user_id: req.body.user_id
                })
                //console.log(newTeamMember);
                newTeamMember.save((err, res2) => {
                    if (err) {
                        res.json({
                            error: true,
                            msg: err
                        })
                    }
                    else {
                        let newRegistration = new Registration({
                            event_id: req.body.event_id,
                            team_id: res1._id,
                            user_id: req.body.user_id,
                            registration_type: "Team",
                            participation: "Absent",
                            status: "Not Confirmed"
                        });
                        newRegistration.save((err, res3) => {
                            if (err) {
                                res.json({
                                    registered: false,
                                    msg: err
                                })
                            }
                            else {
                                res.json({
                                    registered: true,
                                    msg: "Team Member Registered Sucessfully"
                                })
                            }
                        })
                    }
                })
            }
        });
    }
});




router.get('/getRegistrations/:id/:type', (req, res) => {
    Registration.find({
        user_id: req.params.id
    }).populate('event_id').populate('event_id').populate({
        path: 'event_id',
        populate: {
            path: 'category_id'
        }
    }).populate({
        path: 'event_id',
        populate: {
            path: 'category_id'
        }
    }).then((docs) => {
        docs = docs.filter((doc) => {
            if (doc.event_id.category_id.name == req.params.type) {
                return true;
            } else {
                return false;
            }
        });
        res.json(docs);
    })
})

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
        if (docs != 0) {
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
        participation: 'Absent',
        status: 'Not Confirmed'
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

    User.find({
        email_id: req.body.email_id
    }, function (err, docs) {
        if (err) {
            res.json({
                error: true,
                msg: err
            })
        } else if (docs.length == 0) {
            res.json({
                error: true,
                msg: "Mail id is not registered"
            })
        } else {
            Registration.find({
                user_id: docs.user_id
            }, function (err, doc) {
                if (doc.length != 0) {
                    res.json({
                        error: true,
                        msg: "User had already registered"
                    })
                } else {
                    let newRegistration = new Registration({
                        event_id: req.body.event_id,
                        user_id: docs[0]._id,
                        registration_type: req.body.registration_type,
                        participation: req.body.participation,
                        status: 'Not Confirmed'
                    });

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
                }
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

router.put('/:id', (req, res) => {

    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);
    var newParticipation = {
        participation: req.body.participation
    };

    Registration.findByIdAndUpdate(req.params.id, {
        $set: newParticipation
    }, {
            new: true
        }, (err, docs) => {
            if (!err) {
                res.json({
                    error: false,
                    msg: "Attendance updated"
                });
            } else {
                res.json({
                    error: true,
                    msg: "Failed To Update Attendance" + err
                });
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


router.get('/:email', function (req, res, next) {
    User.getUserByEmailId(req.params.email, (err, docs) => {
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

router.get('/getUserEvents/:id', function (req, res, next) {
    Registration.find({ user_id: req.params.id }).populate('event_id').exec(function (err, docs) {
        if (err) {
            res.json({
                error: true,
                msg: 'NO Events'
            });
        } else {
            res.json({
                error: false,
                msg: docs
            });
        }
    });
});


router.get('/getEvent/:id', function (req, res, next) {
    Event.find({ _id: req.params.id }, function (err, docs) {
        if (err) {
            res.json({
                error: true,
                msg: err
            })
        }
        else {
            res.json(docs);
        }
    })
});

router.get('/getCollegeParticipant/:college', function (req, res, next) {
    College.find({ _id: req.params.college }, function (err, docs) {
        if (err) {
            res.json({
                error: true,
                msg: err
            })
        }
        else {
            User.find({ college_id: docs[0]._id, activated: true, cart_confirmed: false }, function (err, doc) {
                if (err) {
                    res.json({
                        error: true,
                        msg: err
                    })
                }
                else {
                    res.json(doc);
                }
            })
        }
    })
});
router.get('/getCollegeMates/:event_id/:user_id', function (req, res, next) {

    Event.findById(req.params.event_id, (err, docs) => {
        if (docs.allow_gender_mixing) {
            User.findById(req.params.user_id, (err, currentUser) => {
                if (err) throw console.error();

                User.find({ college_id: currentUser.college_id, gender: currentUser.gender,activated: true, cart_confirmed: false }, ' email_id', (err, collegeMates) => {
                    if (err) {
                        res.json({
                            error: true,
                            msg: 'No Mates'
                        });
                    }
                    else {
                        var college_mates = new Array();
                        for (key in collegeMates) {
                            if (collegeMates.hasOwnProperty) {
                                college_mates[key] = new Object();
                                college_mates[key].id = collegeMates[key]._id;
                                college_mates[key].text = collegeMates[key].email_id;

                            }
                        }
                        res.json({
                            error: false,
                            msg: college_mates
                        })
                    }
                })
            });
        }
        else {
            User.findById(req.params.user_id, (err, currentUser) => {
                if (err) throw console.error();

                User.find({ college_id: currentUser.college_id, activated: true, cart_confirmed: false }, ' email_id', (err, collegeMates) => {
                    if (err) {
                        res.json({
                            error: true,
                            msg: 'No Mates'
                        });
                    }
                    else {
                        var college_mates = new Array();
                        for (key in collegeMates) {
                            if (collegeMates.hasOwnProperty) {
                                college_mates[key] = new Object();
                                if (collegeMates[key]._id.toString().localeCompare(currentUser._id.toString())) {
                                    college_mates[key].id = collegeMates[key]._id;
                                    college_mates[key].text = collegeMates[key].email_id;
                                }


                            }
                        }
                        res.json({
                            error: false,
                            msg: college_mates,

                        })

                    }
                })
            });
        }

    });
});


module.exports = router;