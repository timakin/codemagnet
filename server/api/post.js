var Post = require('../models/post.model.js');
var React = require('react');

function errorHandler(err, req, res, next) {
    res.status(500);
    res.render('error', { error: err });
}

module.exports = function(router){

  router.route('/post')
    .get(function(req,res,next){
      console.log("post: /post");
      next();
    });

  router.route('/post/add')
    .post(function(req,res,next){
      console.log("post: /post/add");
      console.log(req.body);
      var post = new Post({
        code: req.body.code,
        description: req.body.description,
        section: req.body.section
      });
      post.save(function(err, res) {
        if (err) return errorHandler(err);
        console.log("Saving post succeeded.");
        next();
      });
    });

  router.route('/post/:name')
    .get(function(req,res,next){
      console.log("post: /post/:name", req.params);
      next();
    });

  router.route('/post/*')
    .get(function(req,res,next){
      console.log("post: /post/*", req.params);
      next();
    });

  router.route('/post/all')
    .get(function(req,res,next){
      console.log("post: /post/all");
      Post.find({}, function(err, posts){
        res.send(posts);
      });
    });
};