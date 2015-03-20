var express = require('express');
var app = express();
var router = express.Router();
var config = require('../config.json');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var connectDB = require('./config/database');
var insertSeedData = require('./config/seed');
var fs = require('fs');
var Handlebars = require('handlebars');
var React = require('react');
var Router = require('react-router');
var browserify = require('browserify');
var reactify = require('reactify');

// ===== server api routing
app.use(router);
app.use('/', require('./controller'));

require('node-jsx').install({ harmony: true });
var template = Handlebars.compile(fs.readFileSync('./client/public/index.hbs').toString());
var routes = require('../client/routes')();
app.get('/bundle.js', function(req, res) {
  res.setHeader('content-type', 'application/javascript');
  res.send('./client/public/bundle');
});


app.use(function(req, res) {
  Router.run(routes, req.path, function(Handler) {
    res.send(template({
      markup: React.renderToString(React.createElement(Handler))
    }));
  });
});


// ===== view engine setup
// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


// ===== publish directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client/public'));
app.use(express.static(path.join(__dirname, '../client/public')));



// ===== server listen port
app.set('port', 8080);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});

// ===== database setting
app.set('seedDB', config.db.seedOption);
connectDB();
insertSeedData();


module.exports = app;
