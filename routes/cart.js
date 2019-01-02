//Created By Aravind S
//Date : 02-January-2019
//Created Cart Routes

const express = require('express');
const router = express.Router();
const config = require('../config/env');
const Cart = require('../models/cart');
var ObjectId = require('mongoose').Types.ObjectId;

router.post('/create', (req, res, next) => {
    let newCart = new Cart({
        user_id: req.body.user_id,
        event_id: req.body.event_id
    });
    newCart.save((err, doc) => {
        if (err) {
            res.json({ error: true, msg: 'Failed to Create Cart Entry' + err });
        } else {
            res.json({ error: false, msg: 'Registration Successfull' });
        }
    });
});

router.get('/', function(req, res, next) {
    let page = req.query.page ? req.query.page : 1;
    if(page==0){
        Cart.find({}, (err, docs)=> {
            if(err){
                res.json({ error: true, msg: err });
            }
            else{
                res.json(docs);
            }
        });
        }
    else {
        Cart.getAllDepartments(page, (err, docs) => {
            if (!err) {
                res.send(docs);
            } else {
                res.json({ error: true, msg: err });
            }
        });
    }
});

// router.put('/:id', (req, res) => {
//     if (!ObjectId.isValid(req.params.id))
//         return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

//     var department = {
//         name: req.body.name
//     };
//     Department.findByIdAndUpdate(req.params.id, { $set: department }, { new: true }, (err, doc) => {
//         if (!err) {
//             res.json({ error: false, msg: "Department Updated" });
//         } 
//         else {
//             res.json({ error: true, msg: "Failed To Update Department" + err });
//         }
//     });
// })

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    Cart.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: 'Deleted Department' });
        } else {
            res.json({ error: true, msg: "Failed to Delete Department" });
        }
    });
});

module.exports = router;