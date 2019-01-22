const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/env');
const User = require('../models/user');
const EventRegistration = require('../models/registration');
var ObjectId = require('mongoose').Types.ObjectId;
var path = require('path')
var multer = require('multer')


router.post('/uploadCartDDImage/:id', (req, res) => {
    User.updateMany({
        _id: req.params.id
    },{
        $set: {
            cart_dd_image: 'Awaiting Confirmation'
        }
    }, (err, docs)=>{
        if(err){
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
        if(err){
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
    User.findById(_id, (err, docs) => {
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
        } else {
            console.log(err);
        }

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
        }).populate('college_id').then( (err, docs) => {
            if (!err) {
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
            } else {
                console.log(err);
            }
    
        });
    }
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

router.delete('/:id', (req, res) => {
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