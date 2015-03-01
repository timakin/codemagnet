var express = require('express');
var router = express.Router();

router.get('/post', function(req, res){
  res.send('get user list');
});

router.post('/post', function(req, res){
  res.send('create new post', req.body.contents);
});


module.exports = router;
