//Created By Aravind Raj
//Created routes for team_members
//Date : 20-10-2018

const express = require('express');
const router = express.Router();
const config = require('../config/env');
const TeamMember = require('../models/team_member');
var ObjectId = require('mongoose').Types.ObjectId;

router.post('/create', (req, res, next) => {
    let newTeamMember = new TeamMember({
        team_id: req.body.team_id,
        user_id: req.body.user_id
    });
    newTeamMember.save((err, doc) => {
        if (err) {
            res.json({ error: true, msg: 'Failed to Create TeamMember' + err });
        } else {
            res.json({ error: false, msg: 'TeamMember Created' });
        }
    });
});

router.get('/', function(req, res, next) {
    let page = req.query.page ? req.query.page : 1;

    TeamMember.getAllTeamMembers(page, (err, docs) => {
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

    var team_member = {
        team_id: req.body.team_id,
        user_id: req.body.user_id
    };
    TeamMember.findByIdAndUpdate(req.params.id, { $set: team_member }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Degree Updated" });
        } 
        else {
            res.json({ error: true, msg: "Failed To Update Degree" + err });
        }
    });
})

router.post('/delete/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    TeamMember.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: 'Deleted TeamMember' });
        } else {
            res.json({ error: true, msg: "Failed to Delete TeamMember" });
        }
    });
});
module.exports = router;