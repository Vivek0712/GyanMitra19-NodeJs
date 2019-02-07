const express = require('express');
const router = express.Router();
const config = require('../config/env');
const User = require('../models/user');
const EventRegistration = require('../models/registration');
const Payment = require('../models/payment');
const PasswordToken = require('../models/passwordtoken')
var ObjectId = require('mongoose').Types.ObjectId;
var nodemailer = require("nodemailer");
const bcrypt = require('bcryptjs')

let smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "gyanmitra19@gmail.com",
        pass: "gyan94860"
    }
});

router.post('/resetPassword', (req, res) => {
    User.find({
        email_id: req.body.email_id
    }).then((docs) => {
        PasswordToken.find({
            user_id: docs[0]._id,
            token: req.body.token
        }).then((docs) => {
            if (docs.length == 0) {
                res.json({
                    error: true,
                    msg: 'Invalid Reset Request'
                })
            } else {
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(req.body.password, salt, (err, hash) => {
                        if (err) {
                            res.json({
                                error: true,
                                msg: 'An error Occured'
                            })
                        } else {
                            PasswordToken.findByIdAndRemove(docs[0]._id, (removeError, removeDocs) => {
                                if (removeError) {
                                    res.json({
                                        error: true,
                                        msg: 'An error Occured'
                                    })
                                } else {
                                    User.findByIdAndUpdate(docs[0].user_id, {
                                        $set: {
                                            password: hash
                                        }
                                    }, (updateError, updateDocs) => {
                                        res.json({
                                            error: false,
                                            msg: 'Your password has been successfully reset'
                                        })
                                    })
                                }
                            })
                        }
                    });
                });
            }
        })
    })
})

router.post('/forgotPassword', (req, res) => {
    User.find({
        email_id: req.body.email_id,
        activated: true
    }, (err, docs) => {
        if (err) {
            res.json({
                error: true,
                msg: err
            })
        } else {
            if (docs.length == 0) {
                res.json({
                    error: false,
                    msg: 'Please Verify that you have registerd and activated'
                })
            } else {
                PasswordToken.countDocuments({
                    user_id: docs[0]._id
                }, (countError, count) => {
                    if (countError) {
                        res.json({
                            error: true,
                            msg: countError
                        })
                    } else {
                        if (count == 0) {
                            var token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
                            PasswordToken.create({
                                user_id: docs[0]._id,
                                token: token
                            }, (error, doc) => {
                                if (error) {
                                    res.json({
                                        error: true,
                                        msg: error
                                    })
                                } else {
                                    link = "http://www.gyanmitra19.mepcoeng.ac.in/user/" + "resetPassword/" + token;
                                    let mailOptions = {
                                        to: req.body.email_id,
                                        subject: "Reset your GyanMitra19 Password",
                                        html: "Hello,<br> Please Click on the link to reset your GyanMitra19 password.<br><a href=" + link + ">Click here to Reset Password</a>"
                                    }
                                    smtpTransport.sendMail(mailOptions, function (error, response) {
                                        if (!error) {
                                            res.json({
                                                success: true,
                                                msg: 'Check your inbox for the reset link'
                                            });
                                        } else {
                                            res.json({
                                                success: false,
                                                msg: error
                                            });
                                        }
                                    });
                                }
                            })
                        } else {
                            res.json({
                                error: false,
                                msg: 'An link has already been sent to your mail'
                            })
                        }
                    }
                })
            }
        }
    })
})

router.post('/uploadCartDDImage/:id', (req, res) => {
    User.updateMany({
        _id: req.params.id
    }, {
            $set: {
                cart_dd_image: 'Awaiting Confirmation'
            }
        }, (err, docs) => {
            if (err) {
                res.json({
                    error: true,
                    msg: err
                })
            }
        })
    EventRegistration.updateMany({
        user_id: req.params.id
    }, {
            $set: {
                status: 'Verifying Payment'
            }
        }, (err, docs) => {
            if (err) {
                res.json({
                    error: true,
                    msg: err
                })
            } else {
                res.json({
                    error: false,
                    msg: 'Request successfully Sent!'
                })
            }
        })
})

router.get('/participants/search', (req, res, next) => {
    let _id = req.query.id;
    User.findById(_id).populate('college_id').populate('department_id').populate('degree_id').populate('year_id').exec((err, docs) => {
        if (!err) {
            res.json(docs);
        } else {
            res.json({
                success: true,
                msg: 'User registered'
            })
        }
    })
});

//Create Admin User
router.post('/create', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email_id: req.body.email_id,
        type: req.body.type,
        password: req.body.password,
        activated: true
    });

    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({
                success: false,
                msg: 'Failed to register user' + err
            });
        } else {
            res.json({
                success: true,
                msg: 'User registered'
            });
        }
    });
});


//Read Admin
router.get('/', function (req, res, next) {
    let page = req.query.page ? req.query.page : 1;
    User.find({
        type: 'admin'
    }).skip(config.pagination.perPage * (page - 1)).limit(config.pagination.perPage).exec((err, docs) => {
        if (!err) {
            res.send(docs);
        } else { }

    });
});

//Read All Users
router.get('/read', function (req, res, next) {
    let page = req.query.page ? req.query.page : 1;
    User.getAllUsers(page, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            res.json({
                error: true,
                msg: err
            });
        }
    });
});


//Confirm Payment by Admin
router.post('/confirmPayment', function (req, res) {
    User.count({
        _id: req.body._id
    }, function (err, count) {
        if (count == 0) {
            res.json({
                error: true,
                msg: 'Invalid ID'
            })
        } else {
            User.findByIdAndUpdate(req.body._id, {
                confirmed: true
            }, function (err, result) {
                res.json({
                    error: false,
                    msg: 'Confirmed Payment Successfully'
                })
            })
        }
    });
});

router.post('/confirmPaymentOffline', function (req, res) {

    User.findByIdAndUpdate(req.body._id, {
        confirmed: true,
        cart_paid: true
    }, function (err, result) {

        EventRegistration.findById(req.body.event_id).populate('event_id').exec(function (err, docs) {
            if (docs.event_id.category_id == "5c327d06f352872964702c66") {
                EventRegistration.find({ user_id: req.body._id }).populate('event_id').exec((err, doc) => {
                    if (doc != null) {
                        doc.forEach((val) => {
                            if (val.event_id.category_id == "5c327d06f352872964702c66") {
                                EventRegistration.findByIdAndUpdate(val._id, { $set: { status: "Paid" } }, (err, doc) => { })
                            }
                        })
                    }
                })
            }
            else {
                EventRegistration.findByIdAndUpdate(req.body.event_id, { $set: { status: "Paid" } }, { new: true }, (err, doc) => {
                })
            }
            let newPayment = new Payment({
                mode_of_payment: "Offline",
                status: "Paid",
                user_id: req.body._id,
                amount: docs.event_id.amount,
                payment_status: "Paid",
                transaction_id: result.gmID
            })

            newPayment.save((err, doc) => {
                if (!err) {
                    res.json({
                        error: false,
                        msg: 'Confirmed Payment Successfully'
                    })
                }
            })
        })
    })
})

router.post('/confirmCart', function (req, res) {
    if (!ObjectId.isValid(req.body.user_id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.body.user_id}`);
    User.findById(req.body.user_id).then((doc) => {
        if (doc.length == 0) {
            res.json({
                error: true,
                msg: 'Cannot find an account for that ID'
            })
        } else {
            User.findByIdAndUpdate(req.body.user_id, {
                $set: {
                    cart_confirmed: true
                }
            }, (err, docs) => {
                if (err) {
                    res.json({
                        error: true,
                        msg: 'Unable to Confirm Cart. Try Again'
                    })
                } else {
                    EventRegistration.updateMany({
                        user_id: req.body.user_id
                    }, {
                            $set: {
                                status: 'Payment pending'
                            }
                        }, (err) => {
                            if (err) {
                                res.json({
                                    error: true,
                                    msg: 'Unable to Confirm Cart. Try Again'
                                })
                            } else {
                                res.json({
                                    error: false,
                                    msg: 'Your cart has been successfully confirmed'
                                })
                            }
                        })
                }
            })
        }
    })
})


//Read All Participants
router.get('/participants', function (req, res, next) {

    if (!req.query.page) {
        User.find({
            type: 'user'
        }).populate('college_id').populate('department_id').populate('degree_id').populate('year_id').populate('degree_id').exec(function (err, docs) {
            if (!err) {
                docs = docs.filter((val) => {
                    if (val.college_id != null) {
                        return true;
                    }
                })
                res.send(docs);
            } else {
                res.send({
                    error: true,
                    msg: err
                });
            }
        })
    } else {
        let page = req.query.page
        User.find({}).populate('college_id').skip(config.pagination.perPage * (page - 1)).limit(config.pagination.perPage).exec((err, docs) => {
            if (!err) {
                res.send(docs);
            } else { }

        });
    }
});

router.get('/participantsActivated', function (req, res, next) {

    if (!req.query.page) {
        User.find({
            type: 'user',
            activated: true
        }).populate('college_id').populate('department_id').populate('degree_id').populate('year_id').populate('degree_id').exec(function (err, docs) {
            if (!err) {
                docs = docs.filter((val) => {
                    if (val.college_id != null) {
                        return true;
                    }
                })
                res.send(docs);
            } else {
                res.send({
                    error: true,
                    msg: err
                });
            }
        })
    } else {
        let page = req.query.page
        User.find({}).populate('college_id').skip(config.pagination.perPage * (page - 1)).limit(config.pagination.perPage).exec((err, docs) => {
            if (!err) {
                res.send(docs);
            } else { }

        });
    }
});


router.post('/participants/filter', function (req, res) {
    User.find({
        type: 'user',
        college_id: {
            $regex: req.body.college_id
        },
        Gender: {
            $regex: req.body.gender
        },
        cart_paid: req.body.paidStatus
    }).populate('college_id').populate('department_id').populate('year_id').populate('year_id').exec(function (err, docs) {
        if (!err) {
            res.send(docs);
        } else {
            res.send({
                error: true,
                msg: err
            });
        }
    });
});

router.get('/isCartConfirmed/:id', (req, res) => {
    User.findById(req.params.id, (err, docs) => {
        if (err) {
            res.json({
                error: true,
                msg: error
            })
        } else {
            res.json({
                error: false,
                isCartConfirmed: docs.cart_confirmed
            })
        }
    })
})

router.get('/refreshUser/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);
    User.findById(req.params.id, (err, docs) => {
        if (err) {
            res.json({
                error: true,
                msg: err
            })
        } else {
            res.json({
                error: false,
                msg: {
                    id: docs._id,
                    name: docs.name,
                    email_id: docs.email_id,
                    type: docs.type,
                    gmID: docs.gmID,
                    mobile_number: docs.mobile_number,
                    cart_paid: docs.cart_paid,
                    cart_confirmed: docs.cart_confirmed
                }
            })
        }
    })
})

router.post('/delete/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    User.findByIdAndRemove({
        _id: req.params.id
    }, (err, doc) => {
        if (!err) {
            res.json({
                error: false,
                msg: 'User Deleted'
            });
        } else {
            res.json({
                error: true,
                msg: "Error in deleting user"
            });
        }
    });
});

router.post('/update/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    var newUser = {
        name: req.body.name,
        email_id: req.body.email_id,
        mobile_number: req.body.mobile_number,
        college_id: req.body.college_id,
        degree_id: req.body.degree_id,
        department_id: req.body.department_id,
        year_id: req.body.year_id
    }

    User.findByIdAndUpdate(req.params.id, {
        $set: newUser
    }, (err, doc) => {
        if (!err) {
            res.json({
                error: false,
                msg: 'User Updated'
            });
        } else {
            res.json({
                error: true,
                msg: "Error in Updating user"
            });
        }
    });
});

router.get('/admin', (req, res) => {
    User.find({
        type: 'admin'
    }, (err, docs) => {
        if (err) {
            res.json({
                error: true,
                msg: 'Error' + err
            });
        } else {
            res.json({
                error: false,
                msg: docs
            });
        }
    })
})
module.exports = router;