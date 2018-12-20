//Created By Aravind Raj
//Created routes for team_members
//Date : 20-10-2018

const express = require('express');
const router = express.Router();
const config = require('../config/env');
const Team = require('../models/team');
var ObjectId = require('mongoose').Types.ObjectId;



router.post('/create', (req, res, next) => {
    let newTeam = new Team({
        name: req.body.name,
        user_id: req.body.user_id
    });
    newTeam.save((err, doc) => {
        if (err) {
            res.json({ error: true, msg: 'Failed to Create Team' + err });
        } else {
            res.json({ error: false, msg: 'Team Created' });
        }
    });
});

router.get('/', function(req, res, next) {
    let page = req.query.page ? req.query.page : 1;

    Team.getAllTeams(page, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            res.json({ error: true, msg: err });
        }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    var Team = {
        name: req.body.name
    };
    Team.findByIdAndUpdate(req.params.id, { $set: Team }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Team Updated" });
        } 
        else {
            res.json({ error: true, msg: "Failed To Update Team" + err });
        }
    });
})

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    Team.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: 'Deleted Team' });
        } else {
            res.json({ error: true, msg: "Failed to Delete Team" });
        }
    });
});

module.exports = router;