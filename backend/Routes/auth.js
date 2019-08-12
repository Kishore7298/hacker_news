const express = require('express');
const router = express.Router();
const login = require('../Controller/authController/login');
const signup = require('../Controller/authController/signup');

router.post('/login', login);
router.post('/signup', signup);

module.exports = router;