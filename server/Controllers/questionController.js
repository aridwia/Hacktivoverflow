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

var updatequestion = (req,res) => {
  question.findById({_id: req.params.id})
  .then(data => {
    if(data.createdby == req.id){
    // console.log('datacratedby', data.createdby);
    // console.log('req.id', req.id);
      data.title= req.body.title,
      data.content= req.body.content,
      data.createdby= data.createdby,
      data.createdAt= new Date(),
      data.save((err,updatequest) => {
        if(err) {
          res.send(err)
        } else {
          res.send(updatequest)
          console.log(updatequest);
        }
      })
    }
  })
  .catch(err => {
    console.log('masuk sini');
    res.send(err)
  })
}

var deletequestion = (req,res) => {
  question.findById({_id: req.params.id})
    .then(dataquest => {
      console.log('ini dataquest', dataquest);
      console.log('ini reqid', req.id);
      if(dataquest.createdby == req.id){
          question.deleteOne({_id: dataquest._id})
          .then(data => {
            res.send(data)
          })
          .catch(err => {
            res.send(err)
          })
        } else {
          res.send('you don/t have authorized')
        }
      })
    .catch(err => {
      res.send(err)
    })
}

var deleteanswer = (req,res) => {
  question.findById({_id: req.params.id})
  .then(dataquestion => {
    reply.findById({_id: req.params.id})
    .then(dataanswer => {
      if(dataanswer.createdby == req.id){
        reply.deleteOne({_id: dataanswer._id})
        .then(data => {
          res.send(data)
        })
        .catch(err => {
          res.send(err)
        })
      } else {
        console.log('bukan jawaban mu');
      }
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
