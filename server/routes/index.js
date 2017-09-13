var express = require('express');
var router = express.Router();
var authController = require('../Controllers/authenticationController')

/* GET home page. */
router.post('/login', authController.login)

module.exports = router;
