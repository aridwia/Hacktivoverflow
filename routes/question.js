const questController = require('../Controllers/questionController');
const express = require('express');
const router = express.Router();

router.post('/', questController.create)

router.get('/', questController.getall)

module.exports = router;
