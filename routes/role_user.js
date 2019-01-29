// Created By : Aravind 
// Added Routes for User-Role Assignment
// Date : 20-December-2018

const express = require('express');
const router = express.Router();
const config = require('../config/env');
const RoleUser = require('../models/role_user');
var ObjectId = require('mongoose').Types.ObjectId;

router.post('/create' , (req,res, next)=>{
    let newRoleUser = new RoleUser({
        user_id : req.body.user_id,
        role_id : req.body.role_id,
        department_id: req.body.department_id
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
    RoleUser.find({}).populate('user_id').populate('role_id').populate('department_id').exec((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            res.json({ error: true, msg: err });
        }
    });
});

router.get('/:id', function(req, res, next) {
    RoleUser.find({user_id:req.params.id}).populate('user_id').populate('role_id').populate('department_id').exec((err, docs) => {
        if(docs.length == 0){
            res.send({
                success: false,
                msg:"Your role have not been set yet ,Please Contact the administrator"
            })
        }
        else {
            res.send({
                success: true,
                msg:docs
            })
        }
    })
})


router.post('/update/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    var roleUser = {
        role_id: req.body.role_id,
        user_id: req.body.user_id,
        department_id: req.body.department_id
    };
    RoleUser.findByIdAndUpdate(req.params.id, { $set: roleUser }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Role User Updated" });
        } else {
            res.json({ error: true, msg: "Failed to Update Role User : " + err });
        }
    });
});


// Deletes an Role
// Created By : Aravind S
// Date : 20-December-2018
router.post('/delete/:id', (req, res) => {
    RoleUser.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: 'Role Assignment Deleted' });
        } else {
            res.json({ error: true, msg: "Error in Deleting Role Assignment" });
        }
    });
});

module.exports = router;