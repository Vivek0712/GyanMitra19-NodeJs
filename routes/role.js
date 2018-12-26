// Created By : Aravind 
// Added Routes for Roles
// Date : 20-December-2018

const express = require('express');
const router = express.Router();
const config = require('../config/env');
const Role = require('../models/role');
var ObjectId = require('mongoose').Types.ObjectId;

// Creates a new Role
// Created By : Aravind S
// Date : 20-December-2018
router.post('/create' , (req,res, next)=>{
    let newRole = new Role({
        name: req.body.name
    });
    newRole.save((err, doc) => {
        if (err) {
            res.json({ error: true, msg: 'Failed to create an Role : ' + err });
        } else {
            res.json({ error: false, msg: 'Role created Successfully' });
        }
    });
});

// Returns a pagination of all Roles
// Created By : Aravind S
// Date : 20-December-2018
router.get('/', function(req, res, next) {
    let page = req.query.page ? req.query.page : 1;

    Role.getAllRoles(page, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            res.json({ error: true, msg: err });
        }
    });
});


// Modify Role
// Created By : Aravind S
// Date : 20-December-2018
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.course_name))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    var role = {
        name: req.body.role_name
    };
    Role.findByIdAndUpdate(req.params.id, { $set: role }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Role Created" });
        } else {
            res.json({ error: true, msg: "Failed to Create Role : " + err });
        }
    });
})

// Deletes an Role
// Created By : Aravind S
// Date : 20-December-2018
router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.name))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    Role.remove({ name: req.params.role_name}, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: 'Role Deleted' });
        } else {
            res.json({ error: true, msg: "Error in Deleting Role" });
        }
    });
});

module.exports = router;