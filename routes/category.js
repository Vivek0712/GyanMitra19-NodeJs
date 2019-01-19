//Created By Aravind Raj
//Created routes for category
//Date : 20-10-2018

const express = require('express');
const router = express.Router();
const config = require('../config/env');
const Category = require('../models/category');
var ObjectId = require('mongoose').Types.ObjectId;



router.post('/create', (req, res, next) => {
    let newCategory = new Category({
        name: req.body.name
    });
    newCategory.save((err, doc) => {
        if (err) {
            res.json({ error: true, msg: 'Failed to Create Category' + err });
        } else {
            res.json({ error: false, msg: 'Category Created' });
        }
    });
});

router.get('/', function(req, res, next) {
    let page = req.query.page ? req.query.page : 1;

    Category.getAllCategories(page, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            res.json({ error: true, msg: err });
        }
    });
});

router.post('/update/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    var category = {
        name: req.body.name
    };
    Category.findByIdAndUpdate(req.params.id, { $set: category }, { new: true }, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: "Category Updated" });
        } else {
            res.json({ error: true, msg: "Failed To Update Category" + err });
        }
    });
})

router.post('/delete/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);

    Category.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: 'Deleted Category' });
        } else {
            res.json({ error: true, msg: "Failed to Delete Category" });
        }
    });
});
router.get('/:id', function (req, res, next) { 
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`NO RECORD WITH GIVEN ID : ${req.params.id}`);
    Category.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.json({ error: false, msg: doc });
        } else {
            res.json({ error: true, msg: "Failed to Find Category" });
        }
    })
});

module.exports = router;