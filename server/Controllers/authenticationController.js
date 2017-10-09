require('dotenv').config();
var User = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

var islogin = function(req,res,next){
  jwt.verify(req.headers.token,process.env.SECRET_TOKEN,function(err,decoded){
    if(!err){
      console.log('ini decode', decoded);
      req.data = decoded
      next()
    } else {
      res.send("anda error")
    }
  })
}


module.exports = {islogin};
