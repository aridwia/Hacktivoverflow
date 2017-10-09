var express = require('express');
var router = express.Router();
var userController = require('../Controllers/userController')
/* GET users listing. */
router.get('/', userController.getalluser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)
router.post('/signin', userController.signIn)
router.post('/signup', userController.signUp)

module.exports = router;
