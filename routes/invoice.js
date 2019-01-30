var https = require("https");
var fs = require("fs");
const User = require('../models/user');
const express = require('express');
const router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var EventRegistration = require('../models/registration')

function generateInvoice(invoice, filename, success, error) {
    var postData = JSON.stringify(invoice);
    var options = {
        hostname: "invoice-generator.com",
        port: 443,
        path: "/",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(postData)
        }
    };

    var file = fs.createWriteStream(filename);

    var req = https.request(options, function (res) {
        res.on('data', function (chunk) {
            file.write(chunk);
        })
            .on('end', function () {
                file.end();

                if (typeof success === 'function') {
                    success();
                }
            });
    });
    req.write(postData);
    req.end();

    if (typeof error === 'function') {
        req.on('error', error);
    }
}

router.get('/:id', function (req, res) {
    User.findById(req.params.id, (err, docs) => {
        var invoice = {
            logo: "http://www.gyanmitra19.mepcoeng.ac.in/public/images/logo/GM19grdblue.png",
            from: "Mepco schlenk Engineering College,Sivakasi",
            to: "Johnny Appleseed",
            currency: "usd",
            number: "INV-0001",
            payment_terms: "Auto-Billed - Do Not Pay",
            items: [
                {
                    name: "Subscription to Starter",
                    quantity: 1,
                    unit_cost: 50
                }
            ],
            notes: "Thanks for being a part of Gyanmitra'19!",
            terms: "No need to submit payment. You will be auto-billed for this invoice."
        };
    });

    // EventRegistration.find({user_id: req.params.id}).populate('user_id').populate('event_id').populate({
    //     path: 'event_id',
    //     populate:{
    //         path: 'category_id'
    //     }
    // }).exec((findError, docs)=>{
    //     var totalAmount = 0;
    //     var events = docs.filter((doc)=>{
    //         return doc.event_id.category_id.name == "Event"
    //     })
    //     var workshops = docs.filter((doc)=>{
    //         return doc.event_id.category_id.name == "Workshop"
    //     })
    //     if(events.length != 0) totalAmount+=200;
    //     array.forEach(element => {
            
    //     });

    // })
})


generateInvoice(invoice, 'invoice.pdf', function () {
}, function (error) {
    console.error(error);
});