var express = require('express');
var router = express.Router();

router.route('/')
  .get(function(req,res,next){
    console.log("b");
    next();
  });

router.route('/a')
  .get(function(req,res,next){
    console.log("b---");
    next();
  });

module.exports = router;
