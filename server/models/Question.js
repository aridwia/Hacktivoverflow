const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var questionSchema = new Schema({
  title: {
    type: String,
    required: [true,"judul belum di isi"]
  },
  content: {
    type: String,
    required: [true, "content belum di isi"]
  },
  createdby: {type: Schema.Types.ObjectId, ref: 'User'},
  answer: [{type: Schema.Types.ObjectId, ref: 'Reply'}],
  thumbup: [{type: Schema.Types.ObjectId, ref: 'User'}],
  thumbdown: [{type: Schema.Types.ObjectId, ref: 'User'}]
},{
  timestamps: true
})

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;

//answer: [answeSchema]
