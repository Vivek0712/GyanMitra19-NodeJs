

const express = require('express');
const router = express.Router();
const config = require('../config/env');
const Certificate = require('../models/certificate');
const QR = require('../models/qrcode')
var ObjectId = require('mongoose').Types.ObjectId;

router.post('/create', (req, res, next) => {
    QR.find({
        qr_code: req.body.qr_code
    }).exec((err, docs) => {
        if (docs.length == 0) {
            res.json({
                error: false,
                msg: 'QR Code not associated!'
            })
        } else {
            Certificate.find({
                user_id: docs[o].user_id
            }).populate('event_id').exec((error, documents) => {
                if (documents.length == 0) {
                    let newCertificate = new Certificate({
                        user_id: docs[0].user_id,
                        event_id: req.body.event_id,
                        issued: true
                    });
                    newCertificate.save((err, doc) => {
                        if (err) {
                            res.json({ error: true, msg: 'Failed to Create Certficate Entry' + err });
                        } else {
                            res.json({ error: false, msg: 'Certificate Created' });
                        }
                    });
                } else {
                    res.json({
                        error: false,
                        msg: 'Certificate Already Issued from Event ' + document[0].event_id.title
                    })
                }
            })
        }
    })
});

router.get('/getCertificate/:event_id', (req, res) => {
    Certificate.find({ event_id: req.params.event_id }).populate('user_id').exec((err, docs) => {
        res.json({
            error: false,
            msg: docs
        })
    })
})

router.get('/update/:qr', (req, res) => {
    var certificate = {
        issued: true
    };
    QR.find({
        qr_code: req.params.qr
    }).exec((err, docs) => {
        if (docs.length == 0) {
            res.json({
                error: false,
                msg: 'QR Code not associated!'
            })
        } else {
            Certificate.update({ user_id: docs[o].user_id }, { $set: certificate }, { new: true }, (err, doc) => {
                if (!err) {
                    res.json({ error: false, msg: "Certificate Updated" });
                } else {
                    res.json({ error: true, msg: "Failed To Update Certificate" + err });
                }
            });
        }
    })
})

module.exports = router;