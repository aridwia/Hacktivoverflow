require('dotenv').config();
var User = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

var login = function(req,res,next){
  User.findOne({ email:req.body.email }, function(err, user){
    if(user) {
      bcrypt.compare(req.body.password,user.password)
      .then(result => {
        if(result) {
          var token = jwt.sign({
            name : user.name,
            id: user._id,
            email: user.email
          }, process.env.SECRET_TOKEN)
        res.send({token:token})
      } else {
        res.send("salah password")
      }
      })
      .catch(err => {
        re.send(err)
      })
    } else res.send('user tidak terdaftar')
  })
}

module.exports = {login};
