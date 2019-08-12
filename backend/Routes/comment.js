const express = require('express');
const Router = express.Router();

const getComments = require('../Controller/commentsController/getComments');
const updateComments = require('../Controller/commentsController/updateComments');
const insertComments = require('../Controller/commentsController/insertComments');
const updateList = require('../Controller/commentsController/updateList');

Router.get('/', getComments);
Router.put('/updatelist',updateList);
Router.put('/',updateComments);
Router.post('/', insertComments);

module.exports = Router;