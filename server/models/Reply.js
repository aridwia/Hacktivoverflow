const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const replySchema = new Schema({
  replyContent: {
    type: String,
    required: [true,"reply belum di isi"]
  },
  thequestion: { type: Schema.Types.ObjectId, ref: 'Question'},
  createdby: {type: Schema.Types.ObjectId, ref: 'User'},
  thumbup: [{type: Schema.Types.ObjectId, ref: 'User'}],
  thumbdown: [{type: Schema.Types.ObjectId, ref: 'User'}]
},{
  timestamps: true
})

const Reply = mongoose.model('Reply', replySchema);

module.exports = Reply;
