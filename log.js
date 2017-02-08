/*******************************************************************************
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2015. All Rights Reserved.
 *
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 *******************************************************************************/
/*eslint-env node */
'use strict';

var express = require('express'),
	log4js = require("log4js");

var logger = log4js.getLogger("simple-app-log");

var router = express.Router();
module.exports = router;



router.all('/*', function(req, res) {
	logger.info(req.method + ' ' + req.originalUrl + '\n\t' + JSON.stringify(req.body));
	res.sendStatus(200);
});