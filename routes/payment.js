const express = require('express');
const router = express.Router();
const config = require('../config/env');
const Payment = require('../models/payment');
var ObjectId = require('mongoose').Types.ObjectId;
var crypto = require('crypto');
var jsSHA = require("jssha");
const User = require('../models/user');
const Accomodation = require('../models/accommodation');
router.post('/getHash', (req, res, next) => {

     /* 
        Here Only  total amount must be calculated.
        Replace the req.body.amount with the total Amount calculated here .
        Do this first.
        Dont open the Online Payment
        Dont Upload the ENV file in the github
        Calculate the amount for the Accomodoation also
        I have sent the env file in the email.
        Use Email id to find user
         --Shyam.R
     */
     var hashString = config.payment.key + '|' + req.body.txnId + '|' + req.body.amount + '|' + req.body.productInfo + '|' + req.body.name + '|' + req.body.email + '|||||||||||' + config.payment.salt;
     var sha = new jsSHA('SHA-512', "TEXT");
     sha.update(hashString)
     var hash = sha.getHash("HEX");
     res.json({
          error: true,
          'hash': hash
     })

});
router.post('/failure', (req, res, next) => {
     //res.send('Failed');
     res.redirect('/user/payment/failure');
})
router.post('/success', (req, res, next) => {
     var pd = req.body;
     var hashString = config.payment.salt + '|' + pd.status + '||||||||||' + '|' + pd.email + '|' + pd.firstname + '|' + pd.productinfo + '|' + pd.amount + '|' + pd.txnid + '|' + pd.key;
     var sha = new jsSHA('SHA-512', "TEXT");
     sha.update(hashString)
     var hash = sha.getHash("HEX");
     if (hash == pd.hash) {
          User.find({ email_id: pd.email }, (err, user) => {
               if (err) throw err;
               let payment = new Payment({
                    transaction_id: pd.txnid,
                    mode_of_payment: 'Online',
                    payment_status: 'Paid',
                    status: 'Paid',
                    user_id: user[0]._id,
                    amount: pd.amount
               });
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
                         User.findByIdAndUpdate(user[0]._id,{
                              $set:{
                                   cart_paid: true
                              }
                         },(error, doc)=>{
                              res.redirect('/user/payment/success');
                         })
                    }
               })
          })
     } else {
          res.send({ 'status': pd });
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
          User.find({ email_id: pd.email }, (err, user) => {
               if (err) throw err;
               let acc = new Accomodation({
                    acc_transcation_id: pd.txnid,
                    acc_mode_of_payment: 'Online',
                    acc_payment_status: 'Paid',
                    acc_status: 'Paid',
                    user_id: user[0]._id,
                    acc_amount: pd.amount

               });
               acc.save(function (err, newUser) {
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

          res.send({ 'status': "Error occured" });

     }
})

router.get('/payedUsers', function (req, res) {
     Payment.find({ payment_status: "Paid" }).populate("user_id").exec((err, docs) => {
          if (err) {
               res.json({
                    success: false,
                    msg: err
               })
          }
          else {
               res.json({
                    success: true,
                    msg: docs
               })
          }
     })
});

module.exports = router;