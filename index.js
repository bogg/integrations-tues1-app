/**
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2015, 2015. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 */
/*eslint-env node*/

"use strict";


var express = require("express"),
	log4js = require("log4js"),
	cookieParser = require("cookie-parser"),
	bodyParser = require("body-parser"),
	http = require('http'),
	logController = require('./log');
 
 var PORT = 3000;
 if (process.env.PORT) {
 	PORT = process.env.PORT;
 }
 
 
 // Configuration for logging
log4js.configure("./config/log4js.json", {
    reloadSecs: 30
});

var logger = log4js.getLogger("simple-app");


var app = express();
app.set('env', 'production');
app
	.use(cookieParser())
	.use(bodyParser.json())
	.use('/*', logController);

var server = http.createServer(app);

server.listen(PORT, function () {
	logger.info("listening on port " + PORT);
});
