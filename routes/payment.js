const express = require('express');
const router = express.Router();
const config = require('../config/env');
const Category = require('../models/payment');
var ObjectId = require('mongoose').Types.ObjectId;
var crypto = require('crypto');

router.post('/getHash', (req, res, next) => {
     var cryp = crypto.createHash('sha512');
     var text = "txt";
     cryp.update(text);
     var hash = cryp.digest('hex');
     console.log(hash);
     res.send('hello');
});

module.exports = router;