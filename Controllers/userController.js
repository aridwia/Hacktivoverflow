const bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);
require('dotenv').config()
var jwt = require('jsonwebtoken');
const users = require('../models/User');


var getall = function(req,res){
  users.find()
  .then(user => {
    res.send(user)
  })
  .catch(err => {
    res.send(err)
  })
}

var signUp = function(req,res){
  var hash = bcrypt.hashSync(req.body.password, salt)
  let newUser = new users ({
    name : req.body.name,
    password : hash,
    email : req.body.email
  })
  newUser.save((err,creatdUser) => {
    if(err) {
      res.send(err)
    } else {
      res.send(creatdUser)
    }
  })
}

module.exports = {getall,signUp};
