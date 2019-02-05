const express = require('express');
const router = express.Router();
const config = require('../config/env');
const Payment = require('../models/payment');
const EventRegistration = require('../models/registration');
var ObjectId = require('mongoose').Types.ObjectId;
var crypto = require('crypto');
var jsSHA = require("jssha");
const User = require('../models/user');
const Accomodation = require('../models/accommodation');


router.post('/getAccHash', (req, res, next) => {
     var totalAmount = 0;
     User.find({
          email_id: req.body.email
     }).then((docs) => {
          Accomodation.find({
               user_id: docs[0]._id
          }).exec((findErr, findRes) => {
               totalAmount = findRes[0].acc_days * 100
               totalAmount += totalAmount * 0.04
               var hashString = config.payment.key + '|' + req.body.txnId + '|' + totalAmount + '|' + req.body.productInfo + '|' + req.body.name + '|' + req.body.email + '|||||||||||' + config.payment.salt;
               var sha = new jsSHA('SHA-512', "TEXT");
               sha.update(hashString)
               var hash = sha.getHash("HEX");
               res.json({
                    error: true,
                    'hash': hash
               })
          })
     })
});

router.post('/getHash', (req, res, next) => {
     var totalAmount = 0;
     User.find({
          email_id: req.body.email
     }).then((docs) => {
          EventRegistration.find({
               user_id: docs[0]._id
          }).populate('event_id').populate({
               path: 'event_id',
               populate: {
                    path: 'category_id'
               }
          }).then((registrations) => {
               var workshops = []
               var events = []
               workshops = registrations.filter((workshop) => {
                    return workshop.event_id.category_id.name == 'Workshop'
               })
               events = registrations.filter((event) => {
                    return event.event_id.category_id.name == 'Event'
               })
               var totalAmount = 0;
               workshops.forEach((workshop) => {
                    totalAmount += workshop.event_id.amount
               })
               if (events.length != 0) {
                    totalAmount += 200
               }
               totalAmount += totalAmount * 0.04
               var hashString = config.payment.key + '|' + req.body.txnId + '|' + totalAmount + '|' + req.body.productInfo + '|' + req.body.name + '|' + req.body.email + '|||||||||||' + config.payment.salt;
               var sha = new jsSHA('SHA-512', "TEXT");
               sha.update(hashString)
               var hash = sha.getHash("HEX");
               res.json({
                    error: true,
                    'hash': hash
               })
          })
     })
});

router.post('/failure', (req, res, next) => {
     res.redirect('/user/payment/failure');
})

router.post('/success', (req, res, next) => {
     var pd = req.body;
     var hashString = config.payment.salt + '|' + pd.status + '||||||||||' + '|' + pd.email + '|' + pd.firstname + '|' + pd.productinfo + '|' + pd.amount + '|' + pd.txnid + '|' + pd.key;
     var sha = new jsSHA('SHA-512', "TEXT");
     sha.update(hashString)
     var hash = sha.getHash("HEX");
     if (hash == pd.hash) {
          User.find({
               email_id: pd.email
          }, (err, user) => {
               if (err) throw err;
               let payment = new Payment({
                    transaction_id: pd.txnid,
                    mode_of_payment: 'Online',
                    payment_status: 'Paid',
                    status: 'Paid',
                    user_id: user[0]._id,
                    amount: pd.amount
               });
               Payment.find({
                    transaction_id: pd.txnId
               }).exec((error, docs) => {
                    if (docs.length == 0) {
                         payment.save(function (err, newUser) {
                              if (err) {
                                   res.json({
                                        success: false,
                                        msg: err,
                                        user: user,
                                        payment: payment,
                                        pad: pd
                                   });
                              } else {
                                   User.findByIdAndUpdate(user[0]._id, {
                                        $set: {
                                             cart_paid: true
                                        }
                                   }, (myError, myDocs) => {
                                        EventRegistration.updateMany({
                                             user_id: user[0]._id
                                        }, {
                                                  $set: {
                                                       status: 'Paid'
                                                  }
                                             }, () => {
                                                  res.redirect('/user/payment/success');
                                             })

                                   })
                              }
                         })
                    } else {
                         res.json({
                              success: false,
                              msg: 'Already Paid. Ignore this message',
                              user: user,
                              payment,
                              payment,
                              pad: pd
                         })
                    }
               })
          })
     } else {
          res.send({
               'status': pd
          });
     }
})


router.get('/test', (req, res, next) => {
     res.send('Thes4');
});

router.post('/acc/failure', (req, res, next) => {
     res.redirect('/user/acc/payment/failure');
})
router.post('/acc/success', (req, res, next) => {
     var pd = req.body;

     //Generate new Hash 

     var hashString = config.payment.salt + '|' + pd.status + '||||||||||' + '|' + pd.email + '|' + pd.firstname + '|' + pd.productinfo + '|' + pd.amount + '|' + pd.txnid + '|' + pd.key;

     var sha = new jsSHA('SHA-512', "TEXT");

     sha.update(hashString)

     var hash = sha.getHash("HEX");

     // Verify the new hash with the hash value in response

     if (hash == pd.hash) {
          User.find({
               email_id: pd.email
          }, (err, user) => {
               if (err) throw err;
               let acc = {
                    acc_transcation_id: pd.txnid,
                    acc_mode_of_payment: 'Online',
                    acc_payment_status: 'Paid',
                    acc_status: 'Paid'
               };
               Accomodation.update({
                    user_id: user[0]._id
               }, {
                         $set: acc
                    }, (err, newUser) => {
                         if (err) {
                              res.json({
                                   success: false,
                                   msg: 'Not Updated'
                              });
                         } else {
                              res.redirect('/user/acc/payment/success');
                         }
                    })
          })



     } else {

          res.send({
               'status': "Error occured"
          });

     }
})

router.get('/payedUsers', function (req, res) {
     Payment.find({
          payment_status: "Paid"
     }).populate("user_id").exec((err, docs) => {
          // var event = new Array();
          // var workshop = new Array();
          // var temp = docs.forEach((val) => {
          //      EventRegistration.find({ user_id: val.user_id._id }).populate('event_id').exec((err, doc) => {
          //           console.log(doc);
          //           if (doc.length == 0) {
          //                event.push("Not Participated");
          //                workshop.push("Not Participated");
          //           }
          //           else {
          //                if (doc[0].event_id.category_id._id == "5c327d06f352872964702c66") {
          //                     event.push(doc[0].event_id.title);
          //                }
          //                if (doc[0].event_id.category_id._id == "5c327d04f352872964702c65") {
          //                     workshop.push(doc[0].event_id.title);
          //                }
          //           }
          //           return true;
          //      })
          // })
          // console.log(event);
          if (err) {
               res.json({
                    success: false,
                    msg: err
               })
          } else {
               res.json({
                    success: true,
                    msg: docs
               })
          }
     })
});

router.get('/calculateTotalAmount/:id', (req, res) => {
     EventRegistration.find({
          user_id: req.params.id
     }).populate('event_id').populate({
          path: 'event_id',
          populate: {
               path: 'category_id'
          }
     }).then((registrations) => {
          var workshops = []
          var events = []
          var totalAmount = 0;
          workshops = registrations.filter((workshop) => {
               return workshop.event_id.category_id.name == 'Workshop'
          })
          events = registrations.filter((event) => {
               return event.event_id.category_id.name == 'Event'
          })
          var totalAmount = 0;
          workshops.forEach((workshop) => {
               totalAmount += workshop.event_id.amount
          })
          if (events.length != 0) {
               totalAmount += 200
          }
          res.json({
               amount: totalAmount
          })
     })
});


module.exports = router;