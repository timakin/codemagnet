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
var session = require('express-session');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var flash    = require('connect-flash');
require('node-jsx').install({ harmony: true });

// ===== passport setting
require('./config/passport')(passport);
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({secret: 'codemagnet secret', resave: true, saveUninitialized: true}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// ===== server api routing
app.use(router);
app.use('/', require('./controllers'));

var template = Handlebars.compile(fs.readFileSync('./client/public/index.hbs').toString());
var routes = require('../client/routes')();
app.get('/bundle.js', function(req, res) {
  res.setHeader('content-type', 'application/javascript');
  fs.createReadStream('./client/public/bundle.js').pipe(res);
});

var data = [
  { id: 1, name: 'backbone' },
  { id: 2, name: 'react' },
  { id: 3, name: 'angular' },
];

app.use(function(req, res) {
  Router.run(routes, req.path, function(Handler) {
    res.send(template({
      initialData: JSON.stringify(data),
      markup: React.renderToString(React.createElement(Handler, {params: {datas: data}}))
    }));
  });
});

// ===== publish directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client/public'));
app.use(express.static(path.join(__dirname, '../client/public')));

// ===== server listen port
app.set('port', 4000);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});

// ===== database setting
app.set('seedDB', config.db.seedOption);
connectDB();
insertSeedData();


module.exports = app;
