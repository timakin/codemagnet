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

}
