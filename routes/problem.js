const express = require('express');
const router = express.Router();
const Problem = require('../models/problem');

router.post('/create', (req, res, next) => {
    let newProblem = new Problem({
        name: req.body.name
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

router.post('/delete/:id',(req,res)=> {
    Problem.findByIdAndRemove(req.params.id,(err,docs) => {
        if(err) {
            res.json({
                error:true,
                msg: "Error While Deleting"
            })
        }
        else {
            res.json({
                error:false,
                msg: "Problem will be solved,soon"
            })
        }
    })
})

module.exports = router;