'use strict';
let express = require('express');
let router = express.Router();
let isProduction = (process.env.NODE_ENV === "production");

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Aaron Stanley King', isProduction: isProduction });
});

module.exports = router;
