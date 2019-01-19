//Created By Aravind Raj
//Created routes for ParticipationStatus
//Date : 20-10-2018

const express = require('express');
const router = express.Router();
const config = require('../config/env');
const ParticipationStatus = require('../models/participationstatus');
var ObjectId = require('mongoose').Types.ObjectId;



router.post('/create', (req, res, next) => {
    let newParticipantStatus = new ParticipationStatus({
        name: req.body.name,
        score: req.body.score
    });
    newParticipantStatus.save((err, doc) => {
        if (err) {
            res.json({ error: true, msg: 'Failed to Create ParticipationStatus' + err });
        } else {
            res.json({ error: false, msg: 'ParticipationStatus Created' });
        }
    });
});

router.get('/', function(req, res, next) {
    let page = req.query.page ? req.query.page : 1;
    if(page==0){
        ParticipationStatus.find({}, (err, docs)=> {
            if(err){
                res.json({ error: true, msg: err });
            }
            else{
                res.json(docs);
            }
        });
        }
    else {
        ParticipationStatus.getAllParticipationStatus(page, (err, docs) => {
            if (!err) {
                res.send(docs);
            } else {
                res.json({ error: true, msg: err });
            }
        });
    }
});

router.post('/update/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);
    var newParticipationStatus = {
        name: req.body.name,
        score: req.body.score
    };
    ParticipationStatus.findByIdAndUpdate(req.params.id, { $set: newParticipationStatus }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "ParticipationStatus Updated" });
        }
        else {
            res.json({ error: true, msg: "Failed To Update ParticipationStatus" + err });
        }
    });
})

router.post('/delete/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    ParticipationStatus.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: 'Deleted ParticipationStatus' });
        } else {
            res.json({ error: true, msg: "Failed to Delete ParticipationStatus" });
        }
    });
});

module.exports = router;