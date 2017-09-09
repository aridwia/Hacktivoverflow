const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'nama harus di isi']
  },
  password: {
    type: String,
    required: [true, 'password harus di isi']
  },
  email: {
    type: String,
    required: [true, 'email harus di isi']
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User;
