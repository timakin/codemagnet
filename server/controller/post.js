var Post = require('./post.model.js');

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
        res.send(posts);
      });
    });
};
