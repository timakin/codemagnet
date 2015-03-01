var express = require('express');
var app = express();
var router = express.Router();

var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


// view engine setup
// app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/public')));

app.use(router);
// router.all('/', require('./controller/index'));
// router.use('/', function(req, res, next){
//   res.send('hello world');
// });


// app.all('/*', function(req,res,next){
//   res.send('bbb');
//   next();
// });
//
// app.all('/user', function(req,res,next){
//   res.send('ccc');
//   next();
// });


// router.route('/', require('./controller/index.js'));
// router.route('/user', require('./controller/user.js'));


app.use('/', require('./controller/index.js'));
app.use('/user/', require('./controller/user.js'));
//
//
// function (req, res, next) {
//   console.log("--------");
//   next();
// });
//
// router.all('/user', function (req, res, next) {
//   console.log("jfawe");
//   res.send('b');
//   // next();
// });


app.set('port', 3000);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});


module.exports = app;
