var express = require('express');
var router = express.Router();

router.get('/user', function(req, res){
  res.send('get user list');
});

router.post('/user', function(req, res){
  res.send('create new user', req.body.contents);
});


module.exports = router;
