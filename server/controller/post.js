var Post = require('./post.model.js');
var React = require('react');

module.exports = function(router){

  router.route('/post')
    .get(function(req,res,next){
      console.log("post: /post");
      next();
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
        console.log(posts);
        res.send(posts);
      });
    });
};
