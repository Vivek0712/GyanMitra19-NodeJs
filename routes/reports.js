// Created By : Aravind 
// Added Routes for Taking Reports
// Date : 22-January-2019

const express = require('express');
const router = express.Router();
const User = require('../models/user')
const EventRegistration = require('../models/registration')
const Team = require('../models/team')
const TeamMember = require('../models/team_member')
const College = require('../models/college');
const Payment = require('../models/payment')
var Sync = require('sync');
var ObjectId = require('mongoose').Types.ObjectId;

function getCount(_id) {
    EventRegistration.countDocuments({
        event_id: _id
    }, (err, count) => {
        return count
    })
}

router.get('/getWorkshopCount', (req, res) => {
    EventRegistration.find({}).populate('event_id').populate({
        path: 'event_id',
        populate: {
            path: 'category_id'
        }
    }).populate('user_id').exec((err, docs) => {
        var eventStatus = {};
        var events = [];
        docs = docs.filter((doc) => {
            return doc.event_id.category_id.name == "Workshop"
        })
        docs.forEach((doc) => {
            if (events.includes(doc.event_id.title)) {
                console.log(doc.user_id.cart_paid)
                if (doc.user_id.cart_paid) {
                    eventStatus[doc.event_id.title]["Paid"] += 1;
                } else {
                    eventStatus[doc.event_id.title]["Not Paid"] += 1;
                }
            } else {
                var reportData = {};
                console.log(doc.user_id.cart_paid)
                if (doc.user_id.cart_paid) {
                    reportData["Paid"] = 1;
                    reportData["Not Paid"] = 0;
                } else {
                    reportData["Paid"] = 0;
                    reportData["Not Paid"] = 1;
                }
                events.push(doc.event_id.title)
                eventStatus[doc.event_id.title] = reportData;
            }
        })
        res.json(eventStatus)
    })
})

router.get('/getParticipatingColleges', (req, res) => {
    EventRegistration.find({}).populate('user_id').populate({
        path: 'user_id',
        populate: {
            path: 'college_id'
        }
    }).exec((err, docs) => {

    })
})

router.get('/getDayCount', (req, res) => {
    EventRegistration.find({}).populate('user_id').populate('event_id').populate({
        path: 'event_id',
        populate: {
            path: 'category_id'
        }
    }).exec((err, docs) => {
        var eventStatus = {};
        var events = [];
        docs.forEach((doc) => {
            if (events.includes(doc.user_id._id)) {
                if (doc.event_id.category_id.name == "Workshop") {
                    eventStatus[doc.user_id._id]["Workshop"] = true;
                } else {
                    eventStatus[doc.user_id._id]["Event"] = true;
                }
            } else {
                var reportData = {};
                reportData["Name"] = doc.user_id.name
                reportData["Paid"] = doc.user_id.cart_paid
                if (doc.event_id.category_id.name == "Workshop") {
                    reportData["Workshop"] = true;
                    reportData["Event"] = false;
                } else {
                    reportData["Workshop"] = false;
                    reportData["Event"] = true;
                }
                events.push(doc.user_id._id)
                eventStatus[doc.user_id._id] = reportData;
            }
        })
        res.json(eventStatus)
    })
})

router.get('/getEventCount', (req, res) => {
    EventRegistration.find({}).populate('event_id').populate({
        path: 'event_id',
        populate: {
            path: 'category_id'
        }
    }).populate('user_id').exec((err, docs) => {
        var eventStatus = {};
        var events = [];
        docs = docs.filter((doc) => {
            return doc.event_id.category_id.name == "Event"
        })
        docs.forEach((doc) => {
            if (events.includes(doc.event_id.title)) {
                if (doc.user_id.cart_paid) {
                    eventStatus[doc.event_id.title]["Paid"] += 1;
                } else {
                    eventStatus[doc.event_id.title]["Not Paid"] += 1;
                }
            } else {
                var reportData = {};
                if (doc.user_id.cart_paid) {
                    reportData["Paid"] = 1;
                    reportData["Not Paid"] = 0;
                } else {
                    reportData["Paid"] = 0;
                    reportData["Not Paid"] = 1;
                }
                events.push(doc.event_id.title)
                eventStatus[doc.event_id.title] = reportData;
            }
        })
        res.json(eventStatus)
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
                }, (err, newdoc) => { })
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
                }, (err, newdoc) => { })
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
                }, (err, newdoc) => { })
            }
        })
        res.send('Finished')
    })
})

router.get('/registeredInWorkshops', (req, res) => {
    EventRegistration.find({}).populate('user_id').populate('event_id').populate({
        path: 'event_id',
        populate: {
            path: 'category_id'
        }
    }).populate({
        path: 'event_id',
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
            path: 'degree_id'
        }
    }).populate({
        path: 'user_id',
        populate: {
            path: 'year_id'
        }
    }).populate({
        path: 'user_id',
        populate: {
            path: 'department_id'
        }
    }).exec((err, docs) => {
        docs = docs.filter((doc) => {
            return doc.event_id.category_id.name == "Workshop"
        })
        docs = docs.sort();
        var names = []
        var responseArray = []
        docs.forEach((doc) => {
            responseArray.push(doc)
        })
        res.json({
            error: false,
            msg: responseArray
        })
    })
})

router.get('/registeredInEvents', (req, res) => {
    EventRegistration.find({}).populate('user_id').populate('event_id').populate({
        path: 'event_id',
        populate: {
            path: 'category_id'
        }
    }).populate({
        path: 'event_id',
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
            path: 'degree_id'
        }
    }).populate({
        path: 'user_id',
        populate: {
            path: 'year_id'
        }
    }).populate({
        path: 'user_id',
        populate: {
            path: 'department_id'
        }
    }).exec((err, docs) => {
        docs = docs.filter((doc) => {
            return doc.event_id.category_id.name == "Event"
        })
        docs = docs.sort();
        var names = []
        var responseArray = []
        docs.forEach((doc) => {
            if (!names.includes(doc.user_id.name)) {
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

router.get('/getInvalidCollegeParticipants', (req, res) => {
    User.find({ type: 'user' }).populate('college_id').exec((err, docs) => {
        docs = docs.filter((val) => {
            if (val.college_id == null) {
                return true
            }
        })
        res.send(docs);
    })
})

router.get('/makeCartConfirmed', (req, res) => {
    User.find({}, (err, docs) => {
        docs.forEach((val) => {
            if (val.cart_confirmed == null) {
                User.findByIdAndUpdate(val._id, { $set: { cart_confirmed: false } }, () => {
                    //console.log("Success");
                });
            }
        })
    })
})


// res.send() disabled. Activate this route and wait for some time and terminate this.
router.get('/updatePaymentStatuses', (req, res) => {
    Payment.find({}).exec((err, docs) => {
        docs.forEach((doc) => {
            EventRegistration.updateMany({ user_id: doc.user_id }, { $set: { status: 'Paid' } }, { new: true }, (findErr, findDocs) => {
                //res.send("Hello");
            })
        })
    })
    res.send("Hello");
})


// router.get('/activateUsers',(req,res)=>{
//     User.find({activated:false},(err,docs)=>{
//         docs.forEach((doc)=> {

//         })
//     })
// })


router.get('/totalCollegeCount', (req, res) => {
    College.find({}, (err, docs) => {
        let collegeCount = new Array();
        docs.forEach((val) => {

            User.count({ college_id: val._id }, (err, count) => {
                User.count({ college_id: val._id, cart_paid: true }, (err, count1) => {

                    let temp = {
                        collegeName: val.name,
                        count: count,
                        paidCount: count1
                    }
                    if (temp.count != 0) {
                        console.log(temp.collegeName + "," + temp.count + "," + temp.paidCount);
                    }
                });

            })
        })
    });
});

router.get('/totalCollegeCountWithEvent', (req, res) => {
    EventRegistration.find({}).populate('user_id').populate({
        path: 'user_id',
        populate: {
            path: 'college_id'
        }
    }).populate('event_id').populate({
        path: 'event_id',
        populate: {
            path: 'category_id'
        }
    }).exec((err, docs) => {
        doc = docs.filter((doc) => {
            return doc.event_id.category_id.name == "Event"
        })
        var ids = []
        var colleges = []
        var result = {}
        docs.forEach((doc) => {
            if (!ids.includes(doc.user_id._id)) {
                ids.push(doc.user_id._id)
                if (colleges.includes(doc.user_id.college_id.name)) {
                    if (doc.user_id.cart_paid) {
                        result[doc.user_id.college_id.name]["Paid"] += 1
                        result[doc.user_id.college_id.name]["Total"] += 1
                    } else {
                        result[doc.user_id.college_id.name]["Not Paid"] += 1
                        result[doc.user_id.college_id.name]["Total"] += 1
                    }
                } else {
                    colleges.push(doc.user_id.college_id.name)
                    if (doc.user_id.cart_paid) {
                        result[doc.user_id.college_id.name] = { "Paid": 1, "Not Paid": 0, "Total": 1 }
                    } else {
                        result[doc.user_id.college_id.name] = { "Paid": 0, "Not Paid": 1, "Total": 1 }
                    }
                }
            }
        })
        res.json(result)
    })
});


router.get('/totalCollegeCountWithWorkshop', (req, res) => {
    EventRegistration.find({}).populate('user_id').populate({
        path: 'user_id',
        populate: {
            path: 'college_id'
        }
    }).populate('event_id').populate({
        path: 'event_id',
        populate: {
            path: 'category_id'
        }
    }).exec((err, docs) => {
        doc = docs.filter((doc) => {
            return doc.event_id.category_id.name == "Workshop"
        })
        var ids = []
        var colleges = []
        var result = {}
        docs.forEach((doc) => {
            if (!ids.includes(doc.user_id._id)) {
                ids.push(doc.user_id._id)
                if (colleges.includes(doc.user_id.college_id.name)) {
                    if (doc.user_id.cart_paid) {
                        result[doc.user_id.college_id.name]["Paid"] += 1
                        result[doc.user_id.college_id.name]["Total"] += 1
                    } else {
                        result[doc.user_id.college_id.name]["Not Paid"] += 1
                        result[doc.user_id.college_id.name]["Total"] += 1
                    }
                } else {
                    colleges.push(doc.user_id.college_id.name)
                    if (doc.user_id.cart_paid) {
                        result[doc.user_id.college_id.name] = { "Paid": 1, "Not Paid": 0, "Total": 1 }
                    } else {
                        result[doc.user_id.college_id.name] = { "Paid": 0, "Not Paid": 1, "Total": 1 }
                    }
                }
            }
        })
        res.json(result)
    })
});

module.exports = router;