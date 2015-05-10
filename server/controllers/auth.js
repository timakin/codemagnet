module.exports = function(router, passport) {


  /* Handle Login POST */
  router.route('/auth/login')
    .post(passport.authenticate('login', {
      successRedirect: '/',
      failureRedirect: '/'
    }));

  router.route('/register').get(function(req, res, next){
    console.log("index: /register");
    next();
  });

  /* Handle Registration POST */
  router.post('/auth/signup/local', function(req, res, next) {
    console.log(req.body);
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/register',
      failureFlash: true
    });
  });

  router.route('/auth/signout').get(function(req, res) {
      req.logout();
      res.redirect('/');
    });


}
