const express = require('express');
const router = express.Router();
const login = require('../Controller/authController/login');

router.post('/login',login);

module.exports = router;