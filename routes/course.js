//Created By : Aravind 
//Added Routes for Courses
// Date : 20-December-2018

const express = require('express');
const router = express.Router();
const config = require('../config/env');
const Course = require('../models/course');
var ObjectId = require('mongoose').Types.ObjectId;

// Creates a new Course
// Created By : Aravind S
// Date : 20-December-2018
router.post('/create' , (req,res, next)=>{
    let newCourse = new Course({
        name: req.body.name
    });
    newCourse.save((err, doc) => {
        if (err) {
            res.json({ error: true, msg: 'Failed to create an Course : ' + err });
        } else {
            res.json({ error: false, msg: 'Course created Successfully' });
        }
    });
});

// Returns a pagination of all Courses
// Created By : Aravind S
// Date : 20-December-2018
router.get('/', function(req, res, next) {
    let page = req.query.page ? req.query.page : 1;
    if(page==0){
        Course.find({}, (err, docs)=> {
            if(err){
                res.json({ error: true, msg: err });
            }
            else{
                res.json(docs);
            }
        });
        }
    else {
        Course.getAllCourses(page, (err, docs) => {
            if (!err) {
                res.send(docs);
            } else {
                res.json({ error: true, msg: err });
            }
        });
    }
});


// Modify Course Name
// Created By : Aravind S
// Date : 20-December-2018

//Error :id not :update
//Modified by Aravind Raj
router.post('/update/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.body.course_name}`);

    var course = {
        _id: req.params.id,
        name: req.body.name
    };
    Course.findByIdAndUpdate(req.params.id, { $set: course }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Course Updated" });
        } else {
            res.json({ error: true, msg: "Failed to Update Course : " + err });
        }
    });
})

// Deletes an Course
// Created By : Aravind S
// Date : 20-December-2018

//Error Delete by name was don
//Modified by Aravind Raj
router.post('/delete/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.name}`);

    Course.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: 'Course Deleted' });
        } else {
            res.json({ error: true, msg: "Error in deleting Course" });
        }
    });
});

module.exports = router;