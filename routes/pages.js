const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/index', (req, res) => {
    res.render('index');
})

router.get('/register', (req, res) => {
    res.render('register');
})

module.exports = router;