// Created By : Aravind 
// Added Routes for User-Role Assignment
// Date : 20-December-2018

const express = require('express');
const router = express.Router();
const config = require('../config/env');
const RoleUser = require('../models/role_user');
var ObjectId = require('mongoose').Types.ObjectId;

router.post('/create' , (req,res, next)=>{
    let newRoleUser = new Role({
        user_id : req.body.user_id,
        role_id : req.body.role_id
    });
    newRoleUser.save((err, doc) => {
        if (err) {
            res.json({ error: true, msg: 'Failed to Assign an Role : ' + err });
        } else {
            res.json({ error: false, msg: 'Role Assigned Successfully' });
        }
    });
});

// Returns a pagination of all Roles of Users
// Created By : Aravind S
// Date : 20-December-2018
router.get('/', function(req, res, next) {
    let page = req.query.page ? req.query.page : 1;

    RoleUser.getAllRolesAssignments(page, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            res.json({ error: true, msg: err });
        }
    });
});


// Deletes an Role
// Created By : Aravind S
// Date : 20-December-2018
router.post('/delete/:user_id/:roll_id', (req, res) => {
    RoleUser.remove({ user_id: req.params.user_id, role_id: req.params.role_id}, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: 'Role Assignment Deleted' });
        } else {
            res.json({ error: true, msg: "Error in Deleting Role Assignment" });
        }
    });
});

module.exports = router;