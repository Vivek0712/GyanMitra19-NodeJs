// Created By : Aravind 
// Added Routes for Taking Reports
// Date : 22-January-2019

const express = require('express');
const router = express.Router();
const User = require('../models/user')
const EventRegistration = require('../models/registration')
var ObjectId = require('mongoose').Types.ObjectId;

router.get('/allDomainRegistrationCount', (req, res)=>{
      EventRegistration.aggregate( [ { $group : { _id : "deparment_id" } } ] ).exec((err, docs)=>{
          res.json(docs)
      })
})

module.exports = router;
