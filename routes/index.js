'use strict';
let express = require('express');
let router = express.Router();
let isProduction = (process.env.NODE_ENV === "production");

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Aaron Stanley King', description: 'We\'ll figure it all out in the end.', isProduction: isProduction });
});

module.exports = router;
