var express = require('express');
var app = express();
var router = express.Router();
var passport = require('passport');
var flash = require('connect-flash');
require('./user.js')(router);
require('./post.js')(router);
require('../config/passport')(passport);


router.route('/*')
  .get(function(req,res,next){
    console.log("index: /*");
    next();
  });

router.route('/test')
  .get(function(req,res,next){
    console.log("index /test");
    next();
  });


router.route('/')
  .get(function(req,res,next){
    console.log("index / ***root***");
    next();
  });

/* Handle Login POST */
router.route('/auth/login')
  .post(passport.authenticate('login', {
    successRedirect: '/',
    failureRedirect: '/'
  }));

router.route('/register').get(function(req, res, next){
  console.log("index: /register");
  next();
});

  /* Handle Registration POST */
router.route('/auth/signup')
  .post(function(req, res) {
    console.log("request exists");
  },passport.authenticate('signup', {
    successRedirect: '/',
    failureRedirect: '/register',
    failureFlash: true
  }));

router.route('/auth/signout').get(function(req, res) {
    req.logout();
    res.redirect('/');
  });


module.exports = router;
