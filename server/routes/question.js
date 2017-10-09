const questController = require('../Controllers/questionController');
const authcontroller = require('../Controllers/authenticationController')
const helpersAuthenticate = require('../helpers/authentikasi.js');
const replyController = require('../Controllers/replyController')
const express = require('express');
const router = express.Router();

// router.post('/',   authcontroller.cek,questController.create)
router.post('/', helpersAuthenticate.islogin, questController.create)
router.get('/', questController.getall)
router.get('/:id', questController.getOne)
router.put('/:id',  questController.updatequestion)
router.delete('/:id', helpersAuthenticate.islogin, questController.deletequestion)
router.delete('/:id/:id', questController.deleteanswer)

//reply
router.post('/:id/reply', replyController.createReply)
router.get('/:id/reply', replyController.get)
router.get('/reply/:id', replyController.getall)
router.delete('reply/:id', replyController.deletereply)

module.exports = router;
