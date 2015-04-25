module.exports = function(router){

  router.route('/user')
    .get(function(req,res,next){
      console.log("user: /user");
      next();
    });

  router.route('/user/:name')
    .get(function(req,res,next){
      console.log("user: /user/:name", req.params);
      next();
    });

  router.route('/user/*')
    .get(function(req,res,next){
      console.log("user: /user/*", req.params);
      next();
    });

}
