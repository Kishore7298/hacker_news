const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const app = express();
const http = require('http');
const main = require('./Routes/main');

const server = http.createServer(app);  //Creating the http server

app.use(bodyParser.urlencoded({extended:"false"}));
app.use(bodyParser.json());
app.use(cors());

//passport config setup
app.use(passport.initialize());
require('./Configuration/passportLocal')(passport); 
app.use('/api/v1', main);

const PORT = process.env.PORT || 1818   //the backend will be running in port 1818 by default and the overriding port can be passed from the container
server.listen(PORT)