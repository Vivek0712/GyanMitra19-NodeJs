const express = require('express');
const router = express.Router();
const config = require('../config/env');
const Category = require('../models/payment');
var ObjectId = require('mongoose').Types.ObjectId;
var crypto = require('crypto');

router.post('/getHash', (req, res, next) => {
     var cryp = crypto.createHash('sha512');
     var text = req.body.key+'|'+req.body.txnid+'|'+req.body.amount+'|'+req.body.productInfo+'|'+req.body.name+'|'+req.body.email+'|'+req.body.mobile_number+'|'+req.body.gmId+'|||||||||'+req.body.salt;
     cryp.update(text);
     var hash = cryp.digest('hex');
     res.json({
          hash:hash
     });
});

module.exports = router;