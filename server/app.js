var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect('mongodb://aridwia:aridwia23@cluster0-shard-00-00-dy2uu.mongodb.net:27017,cluster0-shard-00-01-dy2uu.mongodb.net:27017,cluster0-shard-00-02-dy2uu.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin')


var index = require('./routes/index');
var users = require('./routes/users');
var question = require('./routes/question');
var reply = require('./routes/reply')

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', index);
app.use('/users', users);
app.use('/question', question);
app.use('/reply', reply);
//
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
