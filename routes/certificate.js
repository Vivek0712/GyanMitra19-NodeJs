const express = require('express');
const router = express.Router();
const Certificate = require('../models/certificate');
const qr = require('../models/qrcode')
var ObjectId = require('mongoose').Types.ObjectId;

router.post('/create', (req, res, next) => {
    qr.find({qr_code}).exec((qrError, qrDocs)=>{
        if(qrDocs.length == 0){
            res.json({
                error: false,
                msg: 'QR Code is not Registered'
            })
        } else {
            Certificate.find({user_id: qrDocs[0].user_id}).exec((certErr, certDoc)=>{
                if(certDoc.length == 0){
                    let newCertificate = new Certificate({
                        user_id: req.body.user_id,
                        event_id: req.body.event_id,
                        written: false,
                        issued: false
                    });
                    newCertificate.save((err, doc) => {
                        if (err) {
                            res.json({ error: true, msg: 'Failed to Create Certficate Entry' + err });
                        } else {
                            res.json({ error: false, msg: 'Certificate should be written. Check Certificate Table' });
                        }
                    });
                } else {
                    res.json({
                        error: false,
                        msg: 'Certificate need not be written.'
                    })
                }
            })
        }
    })
});

router.get('/:event_id', function(req, res, next) {
    Certificate.find({event_id: req.params.event_id}).populate('user_id').populate({
        path: 'user_id',
        populate: {
            path: 'college_id'
        }
    }).exec( (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            res.json({ error: true, msg: err });
        }
    });
});

router.post('/issueCertificate/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    var certificate = {
        issued: true
    };
    Certificate.update(req.params.id, { $set: certificate }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Certificate Updated" });
        } else {
            res.json({ error: true, msg: "Failed To Update Certificate" + err });
        }
    });
})

router.post('/writeCertificate/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    var certificate = {
        written: true
    };
    Certificate.update(req.params.id, { $set: certificate }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Certificate Updated" });
        } else {
            res.json({ error: true, msg: "Failed To Update Certificate" + err });
        }
    });
})

router.get('/find/:id', function (req, res, next) { 
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);
    Certificate.find({user_id: req.params.id}, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: doc });
        } else {
            res.json({ error: true, msg: "Failed to Find Certificate" });
        }
    })
});

module.exports = router;