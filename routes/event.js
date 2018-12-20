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

router.put('/:id/title', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    var event = {
        name: req.body.title
    };
    Event.findByIdAndUpdate(req.params.id, { $set: event }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Event Updated" });
        } 
        else {
            res.json({ error: true, msg: "Failed To Update Event" + err });
        }
    });
})

router.put('/:id/description', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    var event = {
        name: req.body.description
    };
    Event.findByIdAndUpdate(req.params.id, { $set: event }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Event Updated" });
        } 
        else {
            res.json({ error: true, msg: "Failed To Update Event" + err });
        }
    });
})

router.put('/:id/image_name', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    var event = {
        name: req.body.image_name
    };
    Event.findByIdAndUpdate(req.params.id, { $set: image_name }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Event Updated" });
        } 
        else {
            res.json({ error: true, msg: "Failed To Update Event" + err });
        }
    });
})

router.put('/:id/rules', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    var event = {
        name: req.body.rules
    };
    Event.findByIdAndUpdate(req.params.id, { $set: event }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Event Updated" });
        } 
        else {
            res.json({ error: true, msg: "Failed To Update Event" + err });
        }
    });
})

router.put('/:id/start_time', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    var event = {
        name: req.body.start_time
    };
    Event.findByIdAndUpdate(req.params.id, { $set: event }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Event Updated" });
        } 
        else {
            res.json({ error: true, msg: "Failed To Update Event" + err });
        }
    });
})

router.put('/:id/end_time', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    var event = {
        name: req.body.end_time
    };
    Event.findByIdAndUpdate(req.params.id, { $set: event }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Event Updated" });
        } 
        else {
            res.json({ error: true, msg: "Failed To Update Event" + err });
        }
    });
})

router.put('/:id/event_date', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    var event = {
        name: req.body.event_date
    };
    Event.findByIdAndUpdate(req.params.id, { $set: event }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Event Updated" });
        } 
        else {
            res.json({ error: true, msg: "Failed To Update Event" + err });
        }
    });
})

router.put('/:id/prelims', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    var event = {
        name: req.body.prelims
    };
    Event.findByIdAndUpdate(req.params.id, { $set: event }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Event Updated" });
        } 
        else {
            res.json({ error: true, msg: "Failed To Update Event" + err });
        }
    });
})

router.put('/:id/round_1', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    var event = {
        name: req.body.round_1
    };
    Event.findByIdAndUpdate(req.params.id, { $set: event }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Event Updated" });
        } 
        else {
            res.json({ error: true, msg: "Failed To Update Event" + err });
        }
    });
})

router.put('/:id/round_2', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    var event = {
        name: req.body.round_2
    };
    Event.findByIdAndUpdate(req.params.id, { $set: event }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Event Updated" });
        } 
        else {
            res.json({ error: true, msg: "Failed To Update Event" + err });
        }
    });
})

router.put('/:id/min_members', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    var event = {
        name: req.body.min_members
    };
    Event.findByIdAndUpdate(req.params.id, { $set: event }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Event Updated" });
        } 
        else {
            res.json({ error: true, msg: "Failed To Update Event" + err });
        }
    });
})

router.put('/:id/max_members', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    var event = {
        name: req.body.max_members
    };
    Event.findByIdAndUpdate(req.params.id, { $set: event }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Event Updated" });
        } 
        else {
            res.json({ error: true, msg: "Failed To Update Event" + err });
        }
    });
})

router.put('/:id/max_limit', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    var event = {
        name: req.body.max_limit
    };
    Event.findByIdAndUpdate(req.params.id, { $set: event }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Event Updated" });
        } 
        else {
            res.json({ error: true, msg: "Failed To Update Event" + err });
        }
    });
})

router.put('/:id/contact_email', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    var event = {
        name: req.body.contact_email
    };
    Event.findByIdAndUpdate(req.params.id, { $set: event }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Event Updated" });
        } 
        else {
            res.json({ error: true, msg: "Failed To Update Event" + err });
        }
    });
})

router.put('/:id/venue', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    var event = {
        name: req.body.venue
    };
    Event.findByIdAndUpdate(req.params.id, { $set: event }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Event Updated" });
        } 
        else {
            res.json({ error: true, msg: "Failed To Update Event" + err });
        }
    });
})

router.put('/:id/amount', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    var event = {
        name: req.body.amount
    };
    Event.findByIdAndUpdate(req.params.id, { $set: event }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Event Updated" });
        } 
        else {
            res.json({ error: true, msg: "Failed To Update Event" + err });
        }
    });
})

router.put('/:id/allow_gender_mixing', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    var event = {
        name: req.body.allow_gender_mixing
    };
    Event.findByIdAndUpdate(req.params.id, { $set: event }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Event Updated" });
        } 
        else {
            res.json({ error: true, msg: "Failed To Update Event" + err });
        }
    });
})

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    Event.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: 'Deleted Event' });
        } else {
            res.json({ error: true, msg: "Failed to Delete Event" });
        }
    });
});

module.exports = router;