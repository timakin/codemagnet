module.exports = function(router){

  router.route('/user')
    .get(function(req,res,next){
      next();
    });

  router.route('/user/:name')
    .get(function(req,res,next){
      next();
    });

  router.route('/user/*')
    .get(function(req,res,next){
      next();
    });

}
