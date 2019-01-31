// Created By : Aravind 
// Added Routes for QR Code
// Date : 29-January-2019

const express = require('express');
const router = express.Router();
const QRCode = require('../models/qrcode')
var ObjectId = require('mongoose').Types.ObjectId;
const EventRegistration = require('../models/registration')

router.post('/markPresent', (req, res) => {
    QRCode.find({
        qr_code: req.body.qr_code
    }).exec((err, docs) => {
        if (!err) {
            if (docs.length == 0) {
                res.json({
                    error: false,
                    msg: 'Participant has not Registered'
                })
            } else {
                EventRegistration.find({
                    user_id: docs[0].user_id,
                    event_id: req.body.event_id
                }).exec((error, response) => {
                    if (error) {
                        res.json({
                            error: true,
                            msg: error
                        })
                    } else {
                        if (response.length == 0) {
                            EventRegistration.create({
                                event_id: req.body.event_id,
                                user_id: docs[0].user_id,
                                registration_type: 'Single',
                                participation: 'Present',
                                status: 'Paid'
                            }, (createError, createResponse) => {
                                if (createError) {
                                    res.json({
                                        error: true,
                                        msg: createError
                                    })
                                } else {
                                    res.json({
                                        error: false,
                                        msg: 'Registration Successfull'
                                    })
                                }
                            })

                        } else {
                            EventRegistration.updateOne({
                                user_id: docs[0].user_id,
                                event_id: req.body.event_id
                            }, {
                                $set: {
                                    participation: 'Participated'
                                }
                            }).exec((updateError, updateRes) => {
                                if (updateError) {
                                    res.json({
                                        error: true,
                                        msg: updateError
                                    })
                                } else {
                                    res.json({
                                        error: false,
                                        msg: 'Participant Attendance Successfull'
                                    })
                                }
                            })
                        }
                    }
                })
            }
        } else {
            res.json({
                error: true,
                msg: error
            })
        }
    })
})

router.post('/createMap', (req, res) => {
    QRCode.find({
        qr_code: req.body.qr_code
    }).exec((qrError, qrResponse) => {
        if (qrError) {
            res.json({
                error: true,
                msg: error
            })
        } else {
            if (qrResponse.length == 0) {
                QRCode.find({
                    user_id: req.body.user_id
                }).exec((error, result) => {
                    if (error) {
                        res.json({
                            error: true,
                            msg: error
                        })
                    } else {
                        if (result.length == 0) {
                            QRCode.create({
                                qr_code: req.body.qr_code,
                                user_id: req.body.user_id
                            }, (err, docs) => {
                                if (err) {

                                    res.json({
                                        error: true,
                                        msg: err
                                    })
                                } else {
                                    res.json({
                                        error: false,
                                        msg: 'Participant Successfully Registered'
                                    })
                                }
                            })
                        } else {
                            res.json({
                                error: false,
                                msg: 'User has been already issued an ID Card'
                            })
                        }
                    }
                })
            } else {
                res.json({
                    error: false,
                    msg: 'QR Code already Registered'
                })
            }
        }

    })
})


module.exports = router;