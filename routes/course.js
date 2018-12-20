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

    Course.getAllCourses(page, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            res.json({ error: true, msg: err });
        }
    });
});


// Modify Course Name
// Created By : Aravind S
// Date : 20-December-2018
router.post('/:update', (req, res) => {
    if (!ObjectId.isValid(req.params.course_name))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.body.course_name}`);

    var course = {
        name: req.body.new_course_name
    };
    Course.findByIdAndUpdate({name : req.body.course_name}, { $set: course }, { new: true }, (err, doc) => {
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
router.delete('/:name', (req, res) => {
    if (!ObjectId.isValid(req.params.name))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.name}`);

    Course.findByIdAndRemove({ name: req.params.name}, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: 'Course Deleted' });
        } else {
            res.json({ error: true, msg: "Error in deleting Course" });
        }
    });
});

module.exports = router;