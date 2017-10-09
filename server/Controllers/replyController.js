const question = require('../models/Question');
const reply = require('../models/Reply');

// var createReply = function(req,res) {
//   let newReply = new reply({
//     replyContent: req.body.isi,
//     createdby: req.body.createdby,
//     parents: req.params.id,
//     createdAt: new Date()
//   })
//   console.log("ini new reply",newReply);
//   newReply.save((err, createdReply) => {
//     if(err) {
//       res.send(err)
//     } else {
//       question.findById(req.params.id,(err, dataQuestion) => {
//         dataQuestion.answer.push(createdReply)
//         dataQuestion.save((err, updatedQuestion) => {
//             if(err) {
//               res.send(err)
//             } else {
//               res.send(updatedQuestion)
//             }
//           })
//         })
//     }
//   })
// }

var createReply = (req,res) => {
  question.findById({_id: req.params.id})
  .then(dataquestion => {
    reply.create({
      replyContent: req.body.isi,
      createdby: req.body.createdby,
      thequestion: req.params.id,
      createdAt: new Date()
    })
    .then(datareply => {

      console.log('inidataquestion --------------------', dataquestion.answer);
      dataquestion.answer.push(datareply)
      res.send(datareply)
      dataquestion.save((err, updatedQuestion) => {
         if(err) {
          //  res.send(err)
         } else {
          //  res.send(updatedQuestion)
         }
       })
    })
    .catch(err => {
      res.send(err)
    })
  })
  .catch(err => {
    res.send(err)
  })
}
var get = function(req, res) {
  reply.find({ parent: req.params.id })
  .populate('createdby')
  .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.send(err)
    })
}

var getall = (req,res) => {
  reply.find({_id: req.params.id})
  .then(datareply => {
    res.send(datareply)
  })
  .catch(err => {
    res.send(err)
  })
}

var deletereply = (req,res) => {
  reply.deleteOne({_id: req.params.id})
  .then(replydelted => {
    res.send(replydelted)
  })
  .catch(err => {
    res.send(err)
  })
}
// var get = function(req, res) {
//   reply.find({ parent: req.params.id })
//   .populate('createdby')
//   .exec(function (err, responses) {
//     res.send(err ? err : responses)
//   })
// }

module.exports = {createReply,get,getall,deletereply};
