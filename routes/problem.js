const express = require('express');
const router = express.Router();
const Problem = require('../models/problem');

router.post('/create', (req, res, next) => {
    let newProblem = new Problem({
        name: req.body.name,
        resolved:false
    });
    newProblem.save((err, doc) => {
        if (err) {
            res.json({
                error: true,
                msg: 'Failed to Create Problem : ' + err
            });
        } else {
            res.json({
                error: false,
                msg: 'Problem reported'
            });
        }
    });
});

router.get('/',(req,res)=> {
    Problem.find({},(err,docs)=> {
        res.send(docs);
    })
})

router.post('/resolve/:id',(req,res)=> {
    Problem.findByIdAndUpdate(req.params.id,{$set:{resolved: true}},(err,docs) => {
        if(err) {
            res.json({
                error:true,
                msg: "Error While resolving"
            })
        }
        else {
            res.json({
                error:false,
                msg: "Problem Solved!"
            })
        }
    })
})

module.exports = router;