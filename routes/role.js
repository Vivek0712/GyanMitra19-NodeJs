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
            res.json({ error: true, msg: docs });
        } else {
            res.json({ error: true, msg: err });
        }
    });
});


// Modify Role
// Created By : Aravind S
// Date : 20-December-2018
router.post('/update/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    var role = {
        name: req.body.role_name
    };
    Role.findByIdAndUpdate(req.params.id, { $set: role }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Role Updated" });
        } else {
            res.json({ error: true, msg: "Failed to Update Role : " + err });
        }
    });
})

// Deletes an Role
// Created By : Aravind S
// Date : 20-December-2018
router.post('/delete/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    Role.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: 'Deleted Role' });
        } else {
            res.json({ error: true, msg: "Failed to Delete Role" });
        }
    });
});

module.exports = router;