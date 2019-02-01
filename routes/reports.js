// Created By : Aravind 
// Added Routes for Taking Reports
// Date : 22-January-2019

const express = require('express');
const router = express.Router();
const User = require('../models/user')
const EventRegistration = require('../models/registration')
const Team = require('../models/team')
const TeamMember = require('../models/team_member')
const Event = require('../models/event')
var Sync = require('sync');
var ObjectId = require('mongoose').Types.ObjectId;

function getCount(_id) {
    EventRegistration.countDocuments({
        event_id: _id
    }, (err, count) => {
        return count
    })
}

router.get('/getWorkshopCOunt', (req, res) => {
    EventRegistration.aggregate([{
            '$group': {
                _id: {
                    event_id: '$event_id',
                },
                count: {
                    $sum: 1
                }
            }
        },
        {
            $lookup: {
                from: "events",
                localField: "_id.event_id",
                foreignField: "_id",
                as: "event"
            }
        }
    ]).then((docs) => {
        docs = docs.filter((doc) => {
            if (doc.event[0].category_id == '5c327d04f352872964702c65') {
                return true
            }
        })
        res.json(docs)
    })
})


router.get('/getEventCount', (req, res) => {
    EventRegistration.aggregate([{
            '$group': {
                _id: {
                    event_id: '$event_id',
                },
                count: {
                    $sum: 1
                }
            }
        },
        {
            $lookup: {
                from: "events",
                localField: "_id.event_id",
                foreignField: "_id",
                as: "event"
            }
        }
    ]).then((docs) => {
        docs = docs.filter((doc) => {
            if (doc.event[0].category_id == '5c327d06f352872964702c66') {
                return true
            }
        })
        res.json(docs)
    })
})

router.get('/removeInvalidUsersWithInvalidCollegeID', (req, res) => {

    // Removes Invalid users without college_id

    User.find({
        type: {
            $ne: 'admin'
        }
    }).populate('college_id').then((docs) => {
        docs.forEach((doc) => {
            if (!doc.college_id) {
                User.findOneAndRemove({
                    _id: doc._id
                }, (err, docu) => {
                    console.log(docu);
                })
            }
        })
        res.send('Finished')
    })
})


router.get('/removeInvalidRegistrationsWithInvalidUserID', (req, res) => {

    // Removes Invalid Registrations without User ID

    EventRegistration.find({}).populate('user_id').then((docs) => {
        resA = []
        docs.forEach((doc) => {
            if (!doc.user_id) {
                console.log(doc._id)
                EventRegistration.findOneAndDelete({
                    _id: doc._id
                }, (err, newdoc) => {})
            }
        })
        res.send('Finished')
    })
})

router.get('/removeInvalidTeams', (req, res) => {

    // Removes Invalid Registrations without User ID

    Team.find({}).populate('user_id').then((docs) => {
        resA = []
        docs.forEach((doc) => {
            if (!doc.user_id) {
                console.log(doc._id)
                Team.findOneAndDelete({
                    _id: doc._id
                }, (err, newdoc) => {})
            }
        })
        res.send('Finished')
    })
})


router.get('/removeInvalidTeamMembers', (req, res) => {

    // Removes Invalid Registrations without User ID

    TeamMember.find({}).populate('user_id').populate('team_id').then((docs) => {
        resA = []
        docs.forEach((doc) => {
            if (!doc.user_id || !doc.team_id) {
                console.log(doc._id)
                TeamMember.findOneAndDelete({
                    _id: doc._id
                }, (err, newdoc) => {})
            }
        })
        res.send('Finished')
    })
})

router.get('/registeredInWorkshops', (req, res) => {
    EventRegistration.find({}).populate('user_id').populate('event_id').populate({
        path:'event_id',
        populate:{
            path:'category_id'
        }
    }).populate({
        path:'event_id',
        populate:{
            path:'department_id'
        }
    }).populate({
        path:'user_id',
        populate:{
            path:'college_id'
        }
    }).populate({
        path:'user_id',
        populate:{
            path:'degree_id'
        }
    }).populate({
        path:'user_id',
        populate:{
            path:'year_id'
        }
    }).exec((err, docs)=>{
        docs = docs.filter((doc)=>{
            return doc.event_id.category_id.name == "Workshop"
        })
        docs = docs.sort();
        var names = []
        var responseArray = []
        docs.forEach((doc)=>{
            if(!names.includes(doc.user_id.name)){
                names.push(doc.user_id.name)
                responseArray.push(doc)
            }
        })
        res.json({
            error: false,
            msg: responseArray
        })
    })
})

router.get('/registeredInEvents', (req, res) => {
    EventRegistration.find({}).populate('user_id').populate('event_id').populate({
        path:'event_id',
        populate:{
            path:'category_id'
        }
    }).populate({
        path:'event_id',
        populate:{
            path:'department_id'
        }
    }).populate({
        path:'user_id',
        populate:{
            path:'college_id'
        }
    }).populate({
        path:'user_id',
        populate:{
            path:'degree_id'
        }
    }).populate({
        path:'user_id',
        populate:{
            path:'year_id'
        }
    }).exec((err, docs)=>{
        docs = docs.filter((doc)=>{
            return doc.event_id.category_id.name == "Event"
        })
        docs = docs.sort();
        var names = []
        var responseArray = []
        docs.forEach((doc)=>{
            if(!names.includes(doc.user_id.name)){
                names.push(doc.user_id.name)
                responseArray.push(doc)
            }
        })
        res.json({
            error: false,
            msg: responseArray
        })
    })
})


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
    }).exec((err, docs) => {
        if (err) {
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

router.get('/getInvalidCollegeParticipants',(req,res)=>{
    User.find({type: 'user'}).populate('college_id').exec((err,docs)=> {
        docs = docs.filter((val) => {
            if(val.college_id == null) {
                return true
            }
        })
        res.send(docs);
    })
})

module.exports = router;