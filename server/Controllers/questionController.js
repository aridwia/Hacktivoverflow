const question = require('../models/Question');
const reply = require('../models/Reply');

var create = function(req,res){
  let newQuestion = new question({
    title: req.body.title,
    content: req.body.content,
    createdby: req.id,
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
  .populate('answer')
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

var updatequestion = (req,res) => {
  question.updateOne({_id: req.params.id})
  .then(data => {
    console.log(data);
    title= req.body.title,
    content= req.body.content,
    createdby= data.createdby,
    createdAt= new Date()
  })
  .catch(err => {
    res.send(err)
  })
}

var deletequestion = (req,res) => {
  question.deleteOne({_id: req.params.id})
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

var deleteanswer = (req,res) => {
  question.findById({_id: req.params.id})
  .then(dataquestion => {
    reply.deleteOne({_id: req.params.id})
    .then(deleteanswer => {
      res.send("masuk delete user")
    })
    .catch(err => {
      res.send(err)
    })
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {create,getall,getOne,deletequestion,updatequestion,deleteanswer};
