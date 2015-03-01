var express = require('express');
var router = express.Router();

router.route('/*')
  .get(function(req,res,next){
    console.log("1");
    next();
  });

router.route('/test')
  .get(function(req,res,next){
    console.log("t");
    res.send('test');
    next();
  });


router.route('/')
  .get(function(req,res,next){
    console.log("a");
    next();
  });

module.exports = router;
