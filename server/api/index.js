var express = require('express');
var app = express();
var router = express.Router();
var passport = require('passport');
var flash = require('connect-flash');

require('./user.js')(router);
require('./post.js')(router);
require('./auth.js')(router, passport);

router.route('/*')
  .get(function(req,res,next){
    next();
  });

router.route('/test')
  .get(function(req,res,next){
    next();
  });


router.route('/')
  .get(function(req,res,next){
    next();
  });


module.exports = router;
