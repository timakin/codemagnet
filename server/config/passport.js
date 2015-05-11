var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user.model.js');
var bCrypt = require('bcrypt-nodejs');
var flash = require('connect-flash');

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
      done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
      User.findById(id, function(err, user) {
          done(err, user);
      });
  });

  passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  }, function(username, password, done) {
    console.log("signup req:");
    User.findOne({'username': username},function(err, user) {
      if (err) { return done(err) };
      if (user) {
        console.log("That user already exists.");
        return done(null, false);
      };
      var newUser = new User();
      newUser.username = username;
      newUser.password = createHash(password);
      newUser.save(function(err) {
        if (err) {
          console.log('Error in Saving user: '+err);
          throw err;
        }
        console.log('User Registration succesful');
        return done(null, newUser);
      });
    });
  }));

  var isValidPassword = function(user, password){
      return bCrypt.compareSync(password, user.password);
  }

  var createHash = function(password){
      return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
  }


}
