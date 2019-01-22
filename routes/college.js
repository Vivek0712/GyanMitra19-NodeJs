const express = require('express');
const router = express.Router();
const config = require('../config/env');
const College = require('../models/college');
var ObjectId = require('mongoose').Types.ObjectId;

router.post('/create', (req, res, next) => {
    let newCollege = new College({
        name: req.body.name,
        locale: req.body.locale
    });
    // Modified By Aravind S
    // Changed Error Status
    // Error = True if Error occured
    // Date : 20 - December - 2018
    newCollege.save((err, doc) => {
        if (err) {
            res.json({ error: true, msg: 'Failed to Create College' + err });
        } else {
            res.json({ error: false, msg: 'College Created' });
        }
    });
});

router.get('/', function(req, res, next) {
    let page = req.query.page ? req.query.page : 1;
    if(page != 0){
        College.getAllColleges(page, (err, docs) => {
            if (!err) {
                res.send(docs);
            } else {
                res.json({ error: true, msg: err });
            }
        });
    }
    else{
        College.find({}).sort('name').exec((err, docs)=>{
			if(!err){
                res.send(docs);
            }
            else{
                res.json({error:true, msg: err});
            }
		});
    }
    
});

router.post('/update/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    var college = {
        name: req.body.name,
        locale: req.body.locale
    };
    College.findByIdAndUpdate(req.params.id, { $set: college }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "College Updated" });
        } else {
            res.json({ error: true, msg: "Failed To Update College" + err });
        }
    });
})

router.post('/delete/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    College.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: 'Deleted College' });
        } else {
            res.json({ error: true, msg: "Failed to Delete College" });
        }
    });
});

module.exports = router;