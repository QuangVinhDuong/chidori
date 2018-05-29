const express = require('express');
const router = express.Router();

//const mongoose = require('mongoose');
const Account = require('../models/Account');

/* GET ALL ACCOUNT */
router.get('/', (req, res, next) => {
    Account.find((err, post) => {
        if (err) return next(err);
        res.json(post);
    });
});

/* GET SINGLE ACCOUNT BY ID */
router.get('/:id', (req, res, next) => {
    Account.findById(req.params.id, (err, post) => {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE ACCOUNT */
router.post('/', (req, res, next) => {
    Account.create(req.body, (err, post) => {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE ACCOUNT */
router.put('/:id', (req, res, next) => {
    Account.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE ACCOUNT */
router.delete('/:id', (req, res, next) => {
    Account.findByIdAndRemove(req.params.id, req.body, (err, post) => {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;