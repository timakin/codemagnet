var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../user.model');
var bCrypt = require('bcrypt-nodejs');

passport.use('login', new LocalStrategy({
    passReqToCallback : true
  },
  function(req, name, password, done) {
    User.findOne({'name' :  name },
      function(err, user) {
        if (err)
          return done(err);
        if (!user){
          return done(null, false,
            req.flash('message', 'User Not found.'));
        }
        if (!isValidPassword(user, password)){
          console.log('Invalid Password');
          return done(null, false,
            req.flash('message', 'Invalid Password'));
        }
        return done(null, user);
    });
  })
);

var isValidPassword = function(user, password){
  return bCrypt.compareSync(password, user.password);
}
