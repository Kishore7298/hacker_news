const express = require('express');
const passport = require('passport');
const router = express.Router();
const auth = require('./auth');
const comment = require('./comment');

router.use('/auth', auth); //route for auth module
router.use('/comment', passport.authenticate() ,comment);   //protected route

module.exports = router;