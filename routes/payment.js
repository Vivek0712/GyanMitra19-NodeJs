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
     //var cryp = crypto.createHash('sha512');
  
     var hashString = req.body.key + '|' + req.body.txnId + '|' + req.body.amount + '|' + req.body.productInfo + '|' + req.body.name + '|' + req.body.email + '|||||||||||' + req.body.salt;
     //cryp.update(text);
     //var hash = cryp.digest('hex');
     var sha = new jsSHA('SHA-512', "TEXT");
     sha.update(hashString)
     var hash = sha.getHash("HEX");
     res.json({
          error: true,
          'hash':hash
     })
     
});
router.post('/failure', (req, res, next) => {
     //res.send('Failed');
     res.redirect('/user/payment/failure');
})
router.post('/success', (req, res, next) => {
     var pd = req.body;
	 var salt='MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDQB5hDQhkawze7s4dGtwYW1B0js4RoooRqW/WBl0IwTXZM8ct6QE9EdX2R72lNMFNynnukVz88V/HnDXAiZqvVkZjVzKGaWTU1PcHscI3vK85s00tzM/h+9xhdnPnHQk90r+WfYe3DwhS/y7QZMA4hrk3MnAEDHIfCR7OCpPLutd64kiwIGYdtVkYGVgYXqx4u12U4Ws2D4yZNBHlpsx3LQ03CCzLZlOWoGasELfHfh7mGTuEPqSvDdwTpOiwuOqKdl+/jMwrfKtEEU/zcNZhaLIdHFMuZ6g+5auMid8benMyJ54GWNq9Pve/cjMyVZaFv2DlqIFwgn9KzWsFT+YXZAgMBAAECggEBAMyE2vYs0p+UE4QO0Uz9fRgOe4Nw5xkzxbkHJYu9WI5Caa7l/OT4urWUSNqjpEQF4dSK6QW93OaHk8RTWs4HYKJ8HOT85FfpojzwtWmtkmz0BWLKLKBbFNBGP4cxYAO9Nn6Cu96BGY9ejKWvMCWfMBV+1u/0463aa8HeWiZz4n45OuXbWYa0O/T8KZQd8rBXm26e6jBaIeXztcTrX6uZypr2cWXs1XqLb0Zjw/buJbtdPdJ22ndzIMr2uaihhibRbkxJz0JXIl0aHIruOghHqGHJ2T+YJ3Ef9olH1OGYNDXAQmGPJ+w7M4BlKD7MMyOpv70GYSrIK6Nt9DTXKRxR0IECgYEA9QIxr4zMN6kRoRff7U8LxaiXxFA7XwtDy8a3wU8IQbZanG7oCM5sYlZMk9NfpbVVMCo4jNujMcEawNYdvBaayFo9GrWm/cWY4xfkq61rJiEGlx6St0zH1xKHGlDgWCmBxi3aeHL8mHJT9drVJlXY4a6JP2uzSMe/pgr+oE3+FCkCgYEA2Vy3OX8dAJVCnqD6HdQboDFe6iP2Zx/Tdrts415w79uD6PHY/XlmctbXTexbvQTPLlBkK0MABxa5ponDaANpBHTB983bn93WoM+K1gCWUpMX8rwwH4I7APZECR2y20bHVwJZTuDeifahKI2tU8GeShCI1IWE2pAsRHhZh9tfmjECgYAvq1idbkiBf9yVOj7wPhPtRisZH/8dM+Th7ezsqILTvjYM/6sXo4oE7AOEM3kFla1YbK6KAWXUFV0uLbqlUMSWvK/s1XEDKQHhFVIBcQFK7twIZQNotIChQNKWdSvhG1pLg7pg+wZYZs4dJJGaHtPOvRWpCDxeqbaJCNSXvfT0WQKBgQCqwcCbJbYGCDwu3C3BkykkvsRe0mO3ffQlOXaAZGf6tou5S415C48lNowsBjvHkWilbLhUmC0EZKDyKRXet5cfzg23e/xGagM7j+/00L9HHZFZuudfSXLK/axTMQaaZs8hFpJMejG5VowijLKWsuuEKdskgcPt5Acyvw0uwnMncQKBgBUtfvw390WC90Sm+iSZszsp4dZBgXCJPb5trhxotL7JMv5s6V5sraLV6E9AiDvtMSrzOPhbYV1UDyYcXIICuwQi2fkFZvgmM+qWdNaSZMyDG+6HG5gtqfhDOgePITtuwt07xoV4RD6KBjy6M/09m4eWGiRaOLPYNumvpOjmnU1b';
     //Generate new Hash 
 console.log(pd);
     var hashString = salt + '|' + pd.status + '||||||||||' + '|' + pd.email + '|' + pd.firstname + '|' + pd.productinfo + '|' + pd.amount + '|' + pd.txnid + '|' + pd.key;
 
      var sha = new jsSHA('SHA-512', "TEXT");
 
      sha.update(hashString)
 
      var hash = sha.getHash("HEX");
 
      // Verify the new hash with the hash value in response
 
     if (hash == pd.hash) {
          User.find({ email_id: pd.email }, (err, user) => {
               if (err) throw err;
               let payment = new Payment({
                    transaction_id: pd.txnid,
                    mode_of_payment: 'Online',
                    payment_status: 'Paid',
                    status: 'Paid',
                    user_id: user[0]._id,
                    amount:pd.amount
               });
               payment.save(function (err, newUser) {
                    if (err) {
                        res.json({
                            success: false,
                            msg: err,
							user:user,
							payment:payment,
							pad:pd
                        });
                    } else {
                         res.redirect('/user/payment/success');
                    }
                })
          })
          
        
 
      } else {
 
          res.send({'status':pd});
 
      }
})


router.get('/test', (req, res, next) => {
     res.send('Thes4');  
});

router.post('/acc/failure', (req, res, next) => {
     //res.send('Failed');
     res.redirect('/user/acc/payment/failure');
})
router.post('/acc/success', (req, res, next) => {
     var pd = req.body;

     //Generate new Hash 
 
     var hashString = pd.salt + '|' + pd.status + '||||||||||' + '|' + pd.email + '|' + pd.firstname + '|' + pd.productinfo + '|' + pd.amount + '|' + pd.txnid + '|' + pd.key;
 
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
                    user_id: user._id,
                    acc_amount:pd.amount

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
 
          res.send({'status':"Error occured"});
 
      }
})

router.get('/payedUsers',function(req,res) {
     Payment.find({payment_status: "Paid"}).populate("user_id").exec((err,docs)=>{
          if(err){
               res.json({
                    success: false,
                    msg: err
               })
          }
          else {
               res.json({
                    success:true,
                    msg: docs
               })
          }
     })
});

module.exports = router;