//Created By : Aravind 
//Added Routes for Accommodation
// Date : 20-December-2018

const express = require('express');
const router = express.Router();
const config = require('../config/env');
const Accomodation = require('../models/accommodation');
var ObjectId = require('mongoose').Types.ObjectId;
var multer = require('multer')
var path = require('path')
var nodemailer = require("nodemailer");

let smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "gyanmitra19@gmail.com",
        pass: "gyan94860"
    }
});

router.get('/populate', (req, res) => {
    Accomodation.find().populate('user_id').populate({
        path: 'user_id',
        populate: {
            path: 'college_id'
        }
    }).populate({
        path: 'user_id',
        populate: {
            path: 'department_id'
        }
    }).populate({
        path: 'user_id',
        populate: {
            path: 'degree_id'
        }
    }).populate({
        path: 'user_id',
        populate: {
            path: 'year_id'
        }
    }).exec((err, docs) => {
        if (err) {
            res.json({
                error: true,
                msg: err
            })
        } else {
            res.json(docs);
        }
    })
})

// Uploads a file for DD
// Created By : Aravind S
// Date : 31-December-2018
router.get('/confirmDDUser/:id', (request, res) => {
    data = {
        acc_payment_status: 'DD Pending',
        acc_mode_of_payment: 'Demand Draft'
    }
    Accomodation.updateOne({
        user_id: request.params.id
    }, data, (err, resp) => {
        if (err) {
            res.json({
                error: true,
                msg: err
            })
        } else {
            let mailOptions = {
                to: req.body.email_id,
                subject: "GyanMitra19 - Accomodation Payment",
                html: "<ol><li>The Demand draft must be drawn in the favour of Mepco Schlenk Engineering College</li><li>The Demand draft must be payable at Sivakasi, Tamil Nadu</li><li>At the back side of your <b></b>, write your <b>GM ID</b> followed by 'Accomodation' and the number of days with pencil</li><li>Demand draft must reach us on or before <b>05-Feb-2019</b> via any means to the address : <br />The Convenor,<br />GyanMitra 19,<br />Mepco Schlenk Engineering College,<br />Virudhunagar District,<br />Tamil Nadu - 626 006<br /></li></ol>"
            }
            smtpTransport.sendMail(mailOptions, function (error, response) {
                if (!error) {
                    res.json({
                        success: true,
                        msg: 'Request to pay through DD has been placed'
                    })
                } else {
                    res.json({
                        success: false,
                        msg: error
                    });
                }
            });

        }
    })
})

// Creates a new Accommodation
// Created By : Aravind S
// Date : 20-December-2018
router.post('/create', (req, res, next) => {
    let newAccommodation = new Accomodation({
        acc__transaction_id: "",
        acc_mode_of_payment: req.body.acc_mode_of_payment,
        acc_days: req.body.acc_days,
        acc_file_name: req.body.acc_file_name,
        acc_payment_status: req.body.acc_payment_status,
        acc_status: req.body.acc_status,
        user_id: req.body.user_id,
        acc_amount: req.body.acc_amount,
    });
    newAccommodation.save((err, doc) => {
        if (err) {
            res.json({
                error: true,
                msg: 'Failed to create an Accommodation : ' + err
            });
        } else {
            res.json({
                error: false,
                msg: 'Accommodation request Successfull'
            });
        }
    });
});


// Returns a pagination of all Accommodations
// Created By : Aravind S
// Date : 20-December-2018
router.get('/', function (req, res, next) {
    let page = req.query.page ? req.query.page : 1;
    if (page == 0) {
        Accomodation.find({}, (err, docs) => {
            if (err) {
                res.json({
                    error: true,
                    msg: err
                });
            } else {
                res.send(docs);
            }
        });
    } else {
        Accomodation.getAllAccommodations(page, (err, docs) => {
            if (!err) {
                res.send(docs);
            } else {
                res.json({
                    error: true,
                    msg: err
                });
            }
        });
    }
});

router.get('/getAccomodation/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);
    Accomodation.find({
        user_id: req.params.id
    }, (err, docs) => {
        if (err) {
            res.json({
                error: true,
                msg: err
            });
        } else {
            res.json({
                error: false,
                docs: docs
            });
        }
    })
})

// Confirms Payment for user once paid
// Modified By : Aravind S
// Date : 21-December-2018
router.post('/update/confirmPayment/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.body.id}`);

    var accommodation = {
        acc_payment_status: 'Paid'
    };
    Accomodation.findByIdAndUpdate(req.params.id, {
        $set: accommodation
    }, {
        new: true
    }, (err, doc) => {
        if (!err) {
            res.json({
                error: false,
                msg: "Payment Successfull"
            });
        } else {
            res.json({
                error: true,
                msg: "Failed to Confirm Payment : " + err
            });
        }
    });
})

// Approve Accommodation by Admin
// Created By : Aravind S
// Date : 02-January-2019
router.post('/approveAccommodation/:id', (req, res) => {
    var accommodation = {
        acc_status: 'Approved'
    };
    Accomodation.findByIdAndUpdate(req.params.id, {
        $set: accommodation
    }, {
        new: true
    }, (err, doc) => {
        if (!err) {
            res.json({
                error: false,
                msg: "Accommodation Approved"
            });
        } else {
            res.json({
                error: true,
                msg: "Failed to Approve Accommodation : " + err
            });
        }
    });
})

// Approve Accommodation by Admin
// Created By : Aravind S
// Date : 02-January-2019
router.post('/deproveAccommodation/:id', (req, res) => {
    var accommodation = {
        acc_status: 'Not Confirmed'
    };
    Accomodation.findByIdAndUpdate(req.params.id, {
        $set: accommodation
    }, {
        new: true
    }, (err, doc) => {
        if (!err) {
            res.json({
                error: false,
                msg: "Accommodation Rejected!"
            });
        } else {
            res.json({
                error: true,
                msg: "Failed to reject Accommodation : " + err
            });
        }
    });
})

// Approve Accommodation by Admin
// Created By : Aravind S
// Date : 02-January-2019
router.post('/refusePayment/:id', (req, res) => {
    var accommodation = {
        acc_payment_status: 'Not Paid'
    };
    Accomodation.findByIdAndUpdate(req.params.id, {
        $set: accommodation
    }, {
        new: true
    }, (err, doc) => {
        if (!err) {
            res.json({
                error: false,
                msg: "Payment Rejected!"
            });
        } else {
            res.json({
                error: true,
                msg: "Failed to reject Payment : " + err
            });
        }
    });
})

// Confirm Accommodation by Admin
// Created By : Aravind S
// Date : 20-December-2018
router.post('/confirmAccommodation/:id', (req, res) => {
    var accommodation = {
        acc_status: 'Confirmed',
        acc_payment_status: 'Paid'
    };
    Accomodation.findByIdAndUpdate(req.params.id, {
        $set: accommodation
    }, {
        new: true
    }, (err, doc) => {
        if (!err) {
            res.json({
                error: false,
                msg: "Accommodation Confirmed"
            });
        } else {
            res.json({
                error: true,
                msg: "Failed to Confirm Accommodation : " + err
            });
        }
    });
})

// Cancels an Accommodation of an user
// Created By : Aravind S
// Date : 20-December-2018
router.post('/delete/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    Accomodation.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.json({
                error: false,
                msg: 'Accommodation Cancelled'
            });
        } else {
            res.json({
                error: true,
                msg: "Error in cancelling Accommodation"
            });
        }
    });
});

module.exports = router;