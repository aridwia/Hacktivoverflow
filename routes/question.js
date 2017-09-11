const questController = require('../Controllers/questionController');
const authcontroller = require('../Controllers/authenticationController')
const replyController = require('../Controllers/replyController')
const express = require('express');
const router = express.Router();

router.post('/',   authcontroller.cek,questController.create)

router.get('/', questController.getall)

router.get('/:id', questController.getOne)

router.post('/:id/reply', replyController.createReply)

module.exports = router;
