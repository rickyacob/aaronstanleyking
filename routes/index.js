'use strict';
var express = require('express');
var router = express.Router();
var isProduction = (process.env.NODE_ENV === "production");

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express', isProduction: isProduction });
});

module.exports = router;
