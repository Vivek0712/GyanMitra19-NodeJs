//Created By Aravind Raj
//Created routes for Event (change the router name accordingly for updates)
//Date : 20-10-2018

const express = require('express');
const router = express.Router();
const config = require('../config/env');
const Event = require('../models/event');
var ObjectId = require('mongoose').Types.ObjectId;



router.post('/create', (req, res, next) => {
    let newEvent = new Event({
        title: req.body.title,
        category_id: req.body.category_id,
        department_id: req.body.department_id,
        description: req.body.description,
        image_name: req.body.image_name,
        rules: req.body.rules,
        start_time: req.body.start_time,
        end_time: req.body.end_time,
        event_date: req.body.event_date,
        prelims: req.body.prelims,
        round_1: req.body.round_1,
        round_2: req.body.round_2,
        finals: req.body.finals,
        min_members: req.body.min_members,
        max_members: req.body.max_members,
        max_limit: req.body.max_limit,
        contact_email: req.body.contact_email,
        venue: req.body.venue,
        amount: req.body.amount,
        allow_gender_mixing: req.body.allow_gender_mixing
    });
    newEvent.save((err, doc) => {
        if (err) {
            res.json({ error: true, msg: 'Failed to Create Event' + err });
        } else {
            res.json({ error: false, msg: 'Event Created' });
        }
    });
});

router.get('/', function(req, res, next) {
    let page = req.query.page ? req.query.page : 1;

    Event.getAllEvents(page, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            res.json({ error: true, msg: err });
        }
    });
});

router.put('/:title/title', (req, res) => {
    if (!ObjectId.isValid(req.params.title))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.title}`);

    var event = {
        name: req.body.title
    };
    Event.update({title: req.param.title}, { $set: event }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Event Updated" });
        } 
        else {
            res.json({ error: true, msg: "Failed To Update Event" + err });
        }
    });
})

router.put('/:title/description', (req, res) => {
    if (!ObjectId.isValid(req.params.title))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.title}`);

    var event = {
        description: req.body.description
    };
    Event.update({title: req.params.title}, { $set: event }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Event Updated" });
        } 
        else {
            res.json({ error: true, msg: "Failed To Update Event" + err });
        }
    });
})

router.put('/:title/image_name', (req, res) => {
    if (!ObjectId.isValid(req.params.title))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    var event = {
        image_name: req.body.image_name
    };
    Event.update({title: req.params.title}, { $set: image_name }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Event Updated" });
        } 
        else {
            res.json({ error: true, msg: "Failed To Update Event" + err });
        }
    });
})

router.put('/:title/rules', (req, res) => {
    if (!ObjectId.isValid(req.params.title))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.title}`);

    var event = {
        rules: req.body.rules
    };
    Event.update({title: req.prams.title}, { $set: event }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Event Updated" });
        } 
        else {
            res.json({ error: true, msg: "Failed To Update Event" + err });
        }
    });
})

router.put('/:title/start_time', (req, res) => {
    if (!ObjectId.isValid(req.params.title))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.title}`);

    var event = {
        start_time: req.body.start_time
    };
    Event.update({title: req.params.title}, { $set: event }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Event Updated" });
        } 
        else {
            res.json({ error: true, msg: "Failed To Update Event" + err });
        }
    });
})

router.put('/:title/end_time', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.title}`);

    var event = {
        end_time: req.body.end_time
    };
    Event.update({title: req.params.title},{ $set: event }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Event Updated" });
        } 
        else {
            res.json({ error: true, msg: "Failed To Update Event" + err });
        }
    });
})

router.put('/:title/event_date', (req, res) => {
    if (!ObjectId.isValid(req.params.title))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.title}`);

    var event = {
        event_date: req.body.event_date
    };
    Event.update({title: req.params.title}, { $set: event }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Event Updated" });
        } 
        else {
            res.json({ error: true, msg: "Failed To Update Event" + err });
        }
    });
})

router.put('/:title/prelims', (req, res) => {
    if (!ObjectId.isValid(req.params.title))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.title}`);

    var event = {
        prelims: req.body.prelims
    };
    Event.update({title: req.params.title}, { $set: event }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Event Updated" });
        } 
        else {
            res.json({ error: true, msg: "Failed To Update Event" + err });
        }
    });
})

router.put('/:title/round_1', (req, res) => {
    if (!ObjectId.isValid(req.params.title))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.title}`);

    var event = {
        round_1: req.body.round_1
    };
    Event.update({title: req.params.title}, { $set: event }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Event Updated" });
        } 
        else {
            res.json({ error: true, msg: "Failed To Update Event" + err });
        }
    });
})

router.put('/:title/round_2', (req, res) => {
    if (!ObjectId.isValid(req.params.title))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.title}`);

    var event = {
        round_2: req.body.round_2
    };
    Event.update({title: req.params.title}, { $set: event }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Event Updated" });
        } 
        else {
            res.json({ error: true, msg: "Failed To Update Event" + err });
        }
    });
})

router.put('/:title/min_members', (req, res) => {
    if (!ObjectId.isValid(req.params.title))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.title}`);

    var event = {
        min_members: req.body.min_members
    };
    Event.update({title: req.params.title}, { $set: event }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Event Updated" });
        } 
        else {
            res.json({ error: true, msg: "Failed To Update Event" + err });
        }
    });
})

router.put('/:title/max_members', (req, res) => {
    if (!ObjectId.isValid(req.params.title))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.title}`);

    var event = {
        max_members: req.body.max_members
    };
    Event.update({title: req.params.title},  { $set: event }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Event Updated" });
        } 
        else {
            res.json({ error: true, msg: "Failed To Update Event" + err });
        }
    });
})

router.put('/:title/max_limit', (req, res) => {
    if (!ObjectId.isValid(req.params.title))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.title}`);

    var event = {
        name: req.body.max_limit
    };
    Event.update({title: req.params.title},  { $set: event }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Event Updated" });
        } 
        else {
            res.json({ error: true, msg: "Failed To Update Event" + err });
        }
    });
})

router.put('/:title/contact_email', (req, res) => {
    if (!ObjectId.isValid(req.params.title))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.title}`);

    var event = {
        contact_email: req.body.contact_email
    };
    Event.update({title: req.params.title},  { $set: event }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Event Updated" });
        } 
        else {
            res.json({ error: true, msg: "Failed To Update Event" + err });
        }
    });
})

router.put('/:title/venue', (req, res) => {
    if (!ObjectId.isValid(req.params.title))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.title}`);

    var event = {
        venue: req.body.venue
    };
    Event.update({title: req.params.title},  { $set: event }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Event Updated" });
        } 
        else {
            res.json({ error: true, msg: "Failed To Update Event" + err });
        }
    });
})

router.put('/:title/amount', (req, res) => {
    if (!ObjectId.isValid(req.params.title))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.title}`);

    var event = {
        amount: req.body.amount
    };
    Event.update({title: req.params.title},  { $set: event }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Event Updated" });
        } 
        else {
            res.json({ error: true, msg: "Failed To Update Event" + err });
        }
    });
})

router.put('/:title/allow_gender_mixing', (req, res) => {
    if (!ObjectId.isValid(req.params.title))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.title}`);

    var event = {
        allow_gender_mixing: req.body.allow_gender_mixing
    };
    Event.update({title: req.params.title}, { $set: event }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Event Updated" });
        } 
        else {
            res.json({ error: true, msg: "Failed To Update Event" + err });
        }
    });
})

router.delete('/:title', (req, res) => {
    if (!ObjectId.isValid(req.params.title))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.title}`);

    Event.remove({title: req.params.title}, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: 'Deleted Event' });
        } else {
            res.json({ error: true, msg: "Failed to Delete Event" });
        }
    });
});

module.exports = router;