const express = require('express');
const router = express.Router();
const auth = require('./auth');

router.use('/auth', auth); //route for auth module

module.exports = router;