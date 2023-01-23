const express = require('express');
const path = require('path');
const authController = require('../controllers/auth');
const router = express.Router();

router.post('/register', authController.register);



module.exports = router;