var express = require('express');
var app = express();
var React = require('react');
var router = express.Router();
var fs = require('fs');
var Handlebars = require('handlebars');
var Index = require('../../client/views/index/index.jsx');
require('./user.js')(router);
require('./post.js')(router);
var template = Handlebars.compile(fs.readFileSync('./client/public/index.hbs').toString());

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
        res.send(template({
            markup: React.renderToString(React.createElement(Index))
        }));
    next();
  });



module.exports = router;
