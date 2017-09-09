var express = require('express');
var router = express.Router();
var userController = require('../Controllers/userController')
/* GET users listing. */
router.get('/', userController.getall)

router.post('/', userController.signUp)

module.exports = router;
