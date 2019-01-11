const express = require('express');
const router = express.Router();
const config = require('../config/env');
const Category = require('../models/payment');
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
     
     console.log(req.body.key + '|' + req.body.txnId + '|' + req.body.amount + '|' + req.body.productInfo + '|' + req.body.name + '|' + req.body.email + '|||||||||||' + req.body.salt);
     console.log(hash);
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

     //Generate new Hash 
 
     var hashString = pd.salt + '|' + pd.status + '||||||||||' + '|' + pd.email + '|' + pd.firstname + '|' + pd.productinfo + '|' + pd.amount + '|' + pd.txnid + '|' + pd.key;
 
      var sha = new jsSHA('SHA-512', "TEXT");
 
      sha.update(hashString)
 
      var hash = sha.getHash("HEX");
 
      // Verify the new hash with the hash value in response
 
     if (hash == pd.hash) {
          User.find({ email_id: pd.email }, (err, user) => {
               if (err) throw err;
               let payment = new Accomodation({
                    transcation_id: pd.txnid,
                    mode_of_payment: 'Online',
                    payment_status: 'Paid',
                    status: 'Paid',
                    user_id: user._id,
                    amount:pd.amount
               });
               user.save(function (err, newUser) {
                    if (err) {
                        res.json({
                            success: false,
                            msg: 'Not Updated'
                        });
                    } else {
                         res.redirect('/user/payment/success');
                    }
                })
          })
          
        
 
      } else {
 
          res.send({'status':"Error occured"});
 
      }
})




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
module.exports = router;