//Created By : Aravind 
//Added Routes for Accommodation
//Date : 20-December-2018

const express = require('express');
const router = express.Router();
const config = require('../config/env');
const Accomodation = require('../models/accommodation');
var ObjectId = require('mongoose').Types.ObjectId;

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

// router.get('/', function(req, res, next) {
//     let page = req.query.page ? req.query.page : 1;

//     College.getAllColleges(page, (err, docs) => {
//         if (!err) {
//             res.send(docs);
//         } else {
//             res.json({ error: true, msg: err });
//         }
//     });
// });


router.put('confirm/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    var accommodation = {
        acc_status: 'Confirmed'
    };
    College.findByIdAndUpdate(req.params.id, { $set: accommodation }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Accommodation Confirmed" });
        } else {
            res.json({ error: true, msg: "Failed to Confirm Accommodation : " + err });
        }
    });
})

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    Accomodation.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: 'Accommodation Cancelled' });
        } else {
            res.json({ error: true, msg: "Error in cancelling Accommodation" });
        }
    });
});

module.exports = router;