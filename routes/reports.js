// Created By : Aravind 
// Added Routes for Taking Reports
// Date : 22-January-2019

const express = require('express');
const router = express.Router();
const User = require('../models/user')
const EventRegistration = require('../models/registration')
var ObjectId = require('mongoose').Types.ObjectId;

router.get('/allEventRegistrations', (req, res) => {
    EventRegistration.find({}).populate('event_id').populate({
        path: 'event_id',
        populate: {
            path: 'department_id'
        }
    }).populate({
        path: 'event_id',
        populate: {
            path: 'category_id'
        }
    }).populate('user_id').populate({
        path: 'user_id',
        populate: {
            path: 'department_id'
        }
    }).populate({
        path: 'user_id',
        populate: {
            path: 'college_id'
        }
    }).populate({
        path: 'user_id',
        populate: {
            path: 'year_id'
        }
    }).exec((err, docs)=>{
        if(err){
            res.json({
                error: true,
                msg: err
            })
        } else {
            res.json({
                error: false,
                msg: docs
            })
        }
    })

    // EventRegistration.find({}).populate('user_id').exec((error, docs) => {
    //     if (error) {
    //         res.json({
    //             error: true,
    //             msg: error
    //         })
    //     } else {
    //         invalidUserIDs = []
    //         docs.forEach((doc) => {
    //             if (doc.user_id == null) {
    //                 EventRegistration.remove({_id: doc._id},(err, d)=>{
    //                     console.log(d)
    //                 })
    //                 invalidUserIDs.push(doc._id)
    //             }
    //         })
    //         res.json({
    //             error: false,
    //             msg: invalidUserIDs
    //         })

    //     }
    // })
})

router.get('/totalDomainCount', (req, res) => {
    EventRegistration.find({}).populate('event_id').populate({
        path: 'event_id',
        populate: {
            path: 'department_id'
        }
    }).exec((err, docs) => {
        var domainCount = {}
        docs.forEach((val) => {
            if (domainCount[val.event_id.department_id.name] != undefined) {
                domainCount[val.event_id.department_id.name] += 1;
            } else {
                domainCount[val.event_id.department_id.name] = 0;
            }
        })
        res.send(domainCount)
    })
})

router.get('/totalEventWiseCount', (req, res) => {
    EventRegistration.find({}).populate({
        path: 'event_id',

    }).populate({
        path: 'event_id',
        populate: {
            path: 'department_id'
        }
    }).populate({
        path: 'event_id',
        populate: {
            path: 'category_id',
            match: {
                name: 'Event'
            }
        }
    }).exec((err, docs) => {
        docs = docs.filter((val) => {
            if (val.event_id.category_id != null) {
                return true
            }
        })
        var domainCount = {}
        docs.forEach((val) => {
            if (domainCount[val.event_id.department_id.name] != undefined) {
                domainCount[val.event_id.department_id.name] += 1;
            } else {
                domainCount[val.event_id.department_id.name] = 0;
            }
        })
        res.send(domainCount)
    })
})


router.get('/totalWorkshopWiseCount', (req, res) => {
    EventRegistration.find({}).populate({
        path: 'event_id',

    }).populate({
        path: 'event_id',
        populate: {
            path: 'department_id'
        }
    }).populate({
        path: 'event_id',
        populate: {
            path: 'category_id',
            match: {
                name: 'Workshop'
            }
        }
    }).exec((err, docs) => {
        docs = docs.filter((val) => {
            if (val.event_id.category_id != null) {
                return true
            }
        })
        var domainCount = {}
        docs.forEach((val) => {
            if (domainCount[val.event_id.department_id.name] != undefined) {
                domainCount[val.event_id.department_id.name] += 1;
            } else {
                domainCount[val.event_id.department_id.name] = 0;
            }
        })
        res.send(domainCount)
    })
})

module.exports = router;