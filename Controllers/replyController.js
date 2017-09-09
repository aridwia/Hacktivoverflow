const question = require('../models/question');
const reply = require('../models/reply');

var create = function(req,res) {
  let newReply = new Reply({
    replyContent: req.body.replyContent,
    createdby: req.body.createdby,
    parents: req.params.id,
    createdAt: new Date()
  })
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
      })
    }
  })
}

module.exports = {create};
