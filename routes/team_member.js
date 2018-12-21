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

router.delete('/:team_id/:user_id', (req, res) => 
    TeamMember.remove({user_id: req.params.user_id, team_id: req.params.team_id}, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: 'Deleted TeamMember' });
        } else {
            res.json({ error: true, msg: "Failed to Delete TeamMember" });
        }
}));

module.exports = router;