//Created By : Aravind 
//Added Routes for Accommodation
// Date : 20-December-2018

const express = require('express');
const router = express.Router();
const config = require('../config/env');
const Accomodation = require('../models/accommodation');
var ObjectId = require('mongoose').Types.ObjectId;

// Creates a new Accommodation
// Created By : Aravind S
// Date : 20-December-2018
router.post('/create' , (req,res, next)=>{
    let newAccommodation = new Accomodation({
        acc__transaction_id: req.body.acc__transaction_id,
        acc_mode_of_payment: req.body.acc_mode_of_payment,
        acc_file_name: req.body.acc_file_name,
        acc_Accommodation_status: req.body.acc_Accommodation_status,
        acc_status: req.body.acc_status,
        user_id: req.body.user_id,
        acc_amount: req.body.acc_amount
    });
    newAccommodation.save((err, doc) => {
        if (err) {
            res.json({ error: true, msg: 'Failed to create an Accommodation : ' + err });
        } else {
            res.json({ error: false, msg: 'Accommodation created Successfully' });
        }
    });
});

// Returns a pagination of all Accommodations
// Created By : Aravind S
// Date : 20-December-2018
router.get('/', function(req, res, next) {
    let page = req.query.page ? req.query.page : 1;

    Accomodation.getAllAccommodations(page, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            res.json({ error: true, msg: err });
        }
    });
});

// Confirms Payment for user once paid
// Modified By : Aravind S
// Date : 21-December-2018
router.post('/confirmPayment', (req, res) => {
    if (!ObjectId.isValid(req.params.user_id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.body.user_id}`);

    var accommodation = {
        acc_Accommodation_status: 'Payment Confirmed'
    };
    Accomodation.findByIdAndUpdate({user_id : req.body.user_id}, { $set: accommodation }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Payment Confirmed" });
        } else {
            res.json({ error: true, msg: "Failed to Confirm Payment : " + err });
        }
    });
})

// Confirm Accommodation by Admin
// Created By : Aravind S
// Date : 20-December-2018
router.post('confirmAccommodation', (req, res) => {
    if (!ObjectId.isValid(req.body.user_id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.body.user_id}`);

    var accommodation = {
        acc_status: 'Confirmed'
    };
    Accomodation.findByIdAndUpdate({user_id : req.body.user_id}, { $set: accommodation }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Accommodation Confirmed" });
        } else {
            res.json({ error: true, msg: "Failed to Confirm Accommodation : " + err });
        }
    });
})

// Cancels an Accommodation of an user
// Created By : Aravind S
// Date : 20-December-2018
router.delete('/:user_id', (req, res) => {
    if (!ObjectId.isValid(req.params.user_id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.user_id}`);

    Accomodation.findByIdAndRemove({ user_id: req.params.user_id}, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: 'Accommodation Cancelled' });
        } else {
            res.json({ error: true, msg: "Error in cancelling Accommodation" });
        }
    });
});

module.exports = router;