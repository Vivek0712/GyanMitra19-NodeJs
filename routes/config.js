const express = require('express');
const router = express.Router();
const Config = require('../models/config');
var ObjectId = require('mongoose').Types.ObjectId;



router.post('/create', (req, res, next) => {
    let newConfig = new Config({
        config: req.body.name,
        value: req.body.value
    });
    newConfig.save((err, doc) => {
        if (err) {
            res.json({
                error: true,
                msg: 'Failed to Create Config' + err
            });
        } else {
            res.json({
                error: false,
                msg: 'Config Created'
            });
        }
    });
});

router.get('/', function (req, res, next) {
    let page = req.query.page ? req.query.page : 1;

    Config.getAllConfigs(page, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            res.json({
                error: true,
                msg: err
            });
        }
    });
});

router.get('/getStatus/:config', (req, res) => {
    Config.find({
        config: req.params.config
    }, (err, docs) => {
        if (err) {
            res.json({
                error: true,
                msg: err
            })
        } else {
            if (docs.length == 0) {
                res.json({
                    error: true,
                    msg: 'Invalid Config Request'
                })
            } else {
                res.json({
                    error: false,
                    msg: docs[0].value
                })
            }
        }
    })
})

router.post('/update/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    var config = {
        config: req.body.name,
        value: req.body.value
    };
    Config.findByIdAndUpdate(req.params.id, {
        $set: config
    }, {
        new: true
    }, (err, doc) => {
        if (!err) {
            res.json({
                error: false,
                msg: "Config Updated"
            });
        } else {
            res.json({
                error: true,
                msg: "Failed To Update Config" + err
            });
        }
    });
})

router.post('/delete/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    Config.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.json({
                error: false,
                msg: 'Deleted Config'
            });
        } else {
            res.json({
                error: true,
                msg: "Failed to Delete Config"
            });
        }
    });
});

module.exports = router;