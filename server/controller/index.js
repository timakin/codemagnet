var express = require('express');
var app = express();
var router = express.Router();

require('./user.js')(router);
require('./post.js')(router);


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
    console.log("index: /");
    res.render('index');
    next();
  });



module.exports = router;
