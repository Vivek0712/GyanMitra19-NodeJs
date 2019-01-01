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
        }
        else{
            res.json(docs);
        }
    })
})

// Uploads a file for DD
// Created By : Aravind S
// Date : 31-December-2018
router.post('/uploadImage/:id', (request, res) => {
    var fileName = "";
    var upload = multer({
        storage: multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, './assests/images/accomodation/');
            },
            filename: function (req, file, cb) {
                cb(null, request.params.id + path.extname(file.originalname));
                this.fileName = request.params.id + path.extname(file.originalname);
                Accomodation.findByIdAndUpdate(req.params.id, {
                    $set: {
                        acc_file_name: request.params.id + path.extname(file.originalname)
                    }
                })
            }
        })
    }).any()
    upload(request, res, function (err) {
        if (!err) {
            Accomodation.findByIdAndUpdate(request.params.id, {
                $set: {
                    acc_payment_status: 'Paid',
                }
            }, (error, docs) => {
                if (error) {
                    res.json({
                        error: true,
                        msg: error
                    });
                } else {
                    res.json({
                        error: false,
                        msg: 'File Uploaded Successfully!'
                    });
                }
            });
        } else {
            res.json({
                error: true,
                msg: err
            });
        }
    })
})

// Creates a new Accommodation
// Created By : Aravind S
// Date : 20-December-2018
router.post('/create', (req, res, next) => {
    let newAccommodation = new Accomodation({
        acc__transaction_id: req.body.acc_transaction_id,
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
                msg: 'Accommodation created Successfully'
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

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);
    Accomodation.findById(req.params.id, (err, docs) => {
        if (err) {
            res.json({
                error: true,
                msg: err
            });
        } else {
            res.send(docs);
        }
    })
})

// Confirms Payment for user once paid
// Modified By : Aravind S
// Date : 21-December-2018
router.put('/confirmPayment/:id', (req, res) => {
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

// Confirm Accommodation by Admin
// Created By : Aravind S
// Date : 20-December-2018
router.post('/confirmAccommodation/:id', (req, res) => {
    var accommodation = {
        acc_status: 'Confirmed'
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
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.user_id))
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