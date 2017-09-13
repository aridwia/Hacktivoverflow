const question = require('../models/Question');
const reply = require('../models/Reply');

var createReply = function(req,res) {
  let newReply = new reply({
    replyContent: req.body.isi,
    createdby: req.body.createdby,
    parents: req.params.id,
    createdAt: new Date()
  })
  console.log("ini new reply",newReply);
  newReply.save((err, createdReply) => {
    if(err) {
      res.send(err)
    } else {
      question.findById(req.params.id,(err, dataQuestion) => {
        dataQuestion.answer.push(createdReply)
        dataQuestion.save((err, updatedQuestion) => {
            if(err) {
              res.send(err)
            } else {
              res.send(updatedQuestion)
            }
          })
        })
    }
  })
}

// var get = function(req, res) {
//   reply.find({ parent: req.params.id })
//   .populate('createdby')
//   .then(data => {
//       res.send(data)
//     })
//     .catch(err => {
//       res.send(err)
//     })
// }

var get = function(req, res) {
  reply.find({ parent: req.params.id })
  .populate('createdby')
  .exec(function (err, responses) {
    res.send(err ? err : responses)
  })
}

module.exports = {createReply,get};
