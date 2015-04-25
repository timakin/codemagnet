var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../user.model.js');
var bCrypt = require('bcrypt-nodejs');

passport.use('signup', new LocalStrategy({
    usernameField : 'name',
    passwordField : 'password',
    passReqToCallback : true
  },
  function(req, name, password, done) {
    console.log("signup req:");
    console.log(req.param);
    console.log(name);
    findOrCreateUser = function(){
      User.findOne({'name':name},function(err, user) {
        if (err)
          return done(err);
        if (user)
          return done(null, false, req.flash('message','User Already Exists'));

        var newUser = new User();
        newUser.name = name;
        newUser.password = createHash(password);
        newUser.email = req.param('email');
        newUser.save(function(err) {
          if (err) {
            console.log('Error in Saving user: '+err);
            throw err;
          }
          console.log('User Registration succesful');
          return done(null, newUser);
        });
    });
  };
    process.nextTick(findOrCreateUser);
  })
);

// Generates hash using bCrypt
var createHash = function(password){
 return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
}
