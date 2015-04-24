var express = require('express');
var app = express();
var router = express.Router();
var passport = require('passport');
require('./user.js')(router);
require('./post.js')(router);
require('./passport/login');
require('./passport/signup');


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
    failureRedirect: '/',
    failureFlash : true
  }));

  /* GET Registration Page */
router.route('/auth/signup')
  .get(function(req, res){
    res.render('register',{message: req.flash('message')});
  });

  /* Handle Registration POST */
router.route('/auth/signup')
  .post(passport.authenticate('signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
    failureFlash : true
  }));

router.route('/auth/signout').get(function(req, res) {
    req.logout();
    res.redirect('/');
  });


module.exports = router;
