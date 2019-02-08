

const express = require('express');
const router = express.Router();
const config = require('../config/env');
const Certificate = require('../models/certificate');
var ObjectId = require('mongoose').Types.ObjectId;



router.post('/create', (req, res, next) => {
    let newCertificate = new Certificate({
        user_id: req.body.user_id,
        event_id: req.body.event_id,
        issued: true
    });
    newCertificate.save((err, doc) => {
        if (err) {
            res.json({ error: true, msg: 'Failed to Create Certficate Entry' + err });
        } else {
            res.json({ error: false, msg: 'Certificate Created' });
        }
    });
});

router.get('/', function(req, res, next) {

    Certificate.find({}, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            res.json({ error: true, msg: err });
        }
    });
});

router.post('/update/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    var certificate = {
        issued: true
    };
    Certificate.update(req.params.id, { $set: certificate }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Certificate Updated" });
        } else {
            res.json({ error: true, msg: "Failed To Update Certificate" + err });
        }
    });
})

router.get('/:id', function (req, res, next) { 
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);
    Certificate.find({user_id: req.params.id}, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: doc });
        } else {
            res.json({ error: true, msg: "Failed to Find Certificate" });
        }
    })
});

module.exports = router;