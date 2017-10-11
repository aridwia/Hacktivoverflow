const questController = require('../Controllers/questionController');
const authcontroller = require('../Controllers/authenticationController')
const helpersAuthenticate = require('../helpers/authentikasi.js');
const replyController = require('../Controllers/replyController')
const express = require('express');
const router = express.Router();


router.delete('/:id', helpersAuthenticate.islogin, replyController.deletereply)
router.get('/' ,  replyController.getall)

module.exports = router;
