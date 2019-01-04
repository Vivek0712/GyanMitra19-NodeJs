const express = require('express');
const router = express.Router();
const Registration = require('../models/registration');
const User = require('../models/user');
const Event = require('../models/event');
const Team = require('../models/team');
const TeamMember = require('../models/team_member');
var nodemailer = require("nodemailer");
var ObjectId = require('mongoose').Types.ObjectId;

router.post('/newTeamEventRegistration', (req, res) => {
    User.find({ email_id: req.body.email_id }, function (err, doc) {
        if (err) {
            res.json({
                error: true,
                msg: err
            })
        }
        else if (doc.length == 0) {
            res.json({
                error: true,
                msg: "Mail id is not registered"
            })
        }
        else {
            Registration.find({ event_id: req.body.event_id, user_id: doc[0]._id }).populate('user_id').exec(function (err, docs) {
                if (docs.length != 0) {
                    res.json({
                        error: true,
                        msg: "User had already registered"
                    })
                }
                else {
                    if (req.body.position === "leader") {
                        Team.find({ name: req.body.name }, function (err, re) {
                            if (re.length == 0) {
                                let newTeam = new Team({
                                    name: req.body.name,
                                    user_id: doc[0]._id
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
                                                user_id: doc[0]._id,
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
                                                        user_id: doc[0]._id,
                                                        team_id: res2[0]._id,
                                                        registration_type: "Team",
                                                        participation: "Absent"
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
                                res.json({
                                    error: true,
                                    msg: "Team name already registered"
                                });
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
                                TeamMember.find({ team_id: res1[0]._id }).populate('user_id').exec((err, res5) => {
                                    if (res5.length < res[0].max_members) {
                                        Event.find({ event_id: req.body.event_id }, (err, res) => {
                                            if (res.allow_gender_mixing) {
                                                let newTeamMember = new TeamMember({
                                                    team_id: res1[0]._id,
                                                    user_id: doc[0]._id
                                                })
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
                                                            team_id: res1[0]._id,
                                                            user_id: doc[0]._id,
                                                            registration_type: "Team",
                                                            participation: "Absent"
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
                                            else {
                                                if (doc[0].gender == res5[0].user_id.gender) {
                                                    let newTeamMember = new TeamMember({
                                                        team_id: res1[0]._id,
                                                        user_id: doc[0]._id
                                                    })
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
                                                                team_id: res1[0]._id,
                                                                user_id: doc[0]._id,
                                                                registration_type: "Team",
                                                                participation: "Absent"
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
                                                else {
                                                    res.json({
                                                        error: true,
                                                        msg: "Gender mixing is not allowed"
                                                    })
                                                }
                                            }
                                        })

                                    }
                                    else {
                                        res.json({
                                            error: true,
                                            msg: "Maximum " + res[0].max_members + " are allowed"
                                        })
                                    }
                                });
                            }
                        });
                    }
                }
            });
        }
    });
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


router.post('newTeamEventRegistration', (req, res) => {
    User.find({
        email_id: req.body.email_id
    }, function (err, doc) {
        if (err) {
            res.json({
                error: true,
                msg: err
            })
        } else if (doc.length == 0) {
            res.json({
                error: true,
                msg: "Mail id is not registered"
            })
        } else {
            Registration.find({
                event_id: req.body.event_id,
                user_id: doc[0]._id
            }).populate('user_id').exec(function (err, docs) {
                if (docs.length != 0) {
                    res.json({
                        error: true,
                        msg: "User had already registered"
                    })
                } else {
                    if (req.body.position === "leader") {
                        Team.find({
                            name: req.body.name
                        }, function (err, re) {
                            if (re.length == 0) {
                                let newTeam = new Team({
                                    name: req.body.name,
                                    user_id: doc._id
                                })
                                newTeam.save((err, res1) => {
                                    if (err) {
                                        res.json({
                                            error: true,
                                            msg: err
                                        })
                                    } else {
                                        Team.find({
                                            name: req.body.name
                                        }, (err, res2) => {
                                            let newTeamMember = new TeamMember({
                                                user_id: doc[0]._id,
                                                team_id: res2[0]._id
                                            })
                                            newTeamMember.save((err, res3) => {
                                                if (err) {
                                                    res.json({
                                                        error: true,
                                                        msg: err
                                                    })
                                                } else {
                                                    let newRegistration = new Registration({
                                                        event_id: req.body.event_id,
                                                        user_id: doc[0]._id,
                                                        team_id: res2[0]._id,
                                                        registration_type: "Team",
                                                        participation: "absent",
                                                        status: "Not Confirmed"
                                                    })
                                                    newRegistration.save((err, res4) => {
                                                        if (err) {
                                                            res.json({
                                                                registered: false,
                                                                msg: err
                                                            });
                                                        } else {
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
                            } else {
                                res.json({
                                    error: true,
                                    msg: "Team name already registered"
                                });
                            }
                        });
                    } else {
                        Team.find({
                            name: req.body.name
                        }, (err, res1) => {
                            if (err) {
                                res.json({
                                    error: true,
                                    msg: err
                                });
                            } else {
                                let newTeamMember = new TeamMember({
                                    team_id: res1[0]._id,
                                    user_id: doc[0]._id
                                })

                                newTeamMember.save((err, res2) => {
                                    if (err) {
                                        res.json({
                                            error: true,
                                            msg: err
                                        })
                                    } else {
                                        let newRegistration = new Registration({
                                            event_id: req.body.event_id,
                                            team_id: res1[0]._id,
                                            user_id: doc[0]._id,
                                            registration_type: "Team",
                                            participation: "absent",
                                            status: "Not Confirmed"
                                        })
                                        newRegistration.save((err, res3) => {
                                            if (err) {
                                                res.json({
                                                    registered: false,
                                                    msg: err
                                                })
                                            } else {
                                                res.json({
                                                    registered: true,
                                                    msg: "Registered Sucessfully"
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        });
                    }
                }
            });
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

router.get('/getCollegeMates/:event_id', function (req, res, next) {

    Event.findById(req.params.event_id, (err, docs) => {
        if (docs.allow_gender_mixing) {
            console.log('hello');
        }
        else {
            console.log('hello2');
        }
    
    });


});

module.exports = router;