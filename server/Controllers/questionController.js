const question = require('../models/Question');

var create = function(req,res){
  let newQuestion = new question({
    title: req.body.title,
    content: req.body.content,
    createdby: req.body.createdby,
    createdAt: new Date()
  })
  newQuestion.save((err, createdQuestion) => {
    if(err) {
      res.send(err)
    } else {
      res.send(createdQuestion)
    }
  })
}

var getall = function(req,res) {
  question.find({})
  .populate('createdby')
  .then(question => {
    res.send(question)
  })
  .catch(err => {
    res.send(err)
  })
}

var getOne = function(req,res) {
  question.findById(req.params.id)
  .then(data => {
    res.send(data)
  })
}


module.exports = {create,getall,getOne};
