const express = require('express');
const router = express.Router();
const config = require('../config/env');
const Year = require('../models/year');
var ObjectId = require('mongoose').Types.ObjectId;


router.post('/create' , (req,res, next)=>{
    let newYear = new Year({
        name: req.body.name
    });
    newYear.save((err, doc) => {
        if (err) {
            res.json({ error: true, msg: 'Failed to create an Year : ' + err });
        } else {
            res.json({ error: false, msg: 'Year created Successfully' });
        }
    });
});

router.get('/', function(req, res, next) {
    let page = req.query.page ? req.query.page : 1;
    if(page==0){
        Year.find({}, (err, docs)=> {
            if(err){
                res.json({ error: true, msg: err });
            }
            else{
                res.json(docs);
            }
        });
        }
    else {
        Year.getAllYears(page, (err, docs) => {
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
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.body.course_name}`);

    var course = {
        _id: req.params.id,
        name: req.body.name
    };
    Year.findByIdAndUpdate(req.params.id, { $set: course }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Year Updated" });
        } else {
            res.json({ error: true, msg: "Failed to Update Year : " + err });
        }
    });
})

router.post('/delete/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.name}`);

    Year.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: 'Year Deleted' });
        } else {
            res.json({ error: true, msg: "Error in deleting Year" });
        }
    });
});

module.exports = router;