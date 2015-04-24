var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../user.model');
var bCrypt = require('bcrypt-nodejs');

passport.use('signup', new LocalStrategy({
    passReqToCallback : true
  },
  function(req, name, password, done) {
    findOrCreateUser = function(){
      // find a user in Mongo with provided name
      User.findOne({'name':name},function(err, user) {
        // In case of any error return
        if (err){
          console.log('Error in SignUp: '+err);
          return done(err);
        }
        // already exists
        if (user) {
          console.log('User already exists');
          return done(null, false,
             req.flash('message','User Already Exists'));
        } else {
          // if there is no user with that email
          // create the user
          var newUser = new User();
          // set the user's local credentials
          newUser.name = name;
          newUser.password = createHash(password);
          newUser.email = req.param('email');

          // save the user
          newUser.save(function(err) {
            if (err){
              console.log('Error in Saving user: '+err);
              throw err;
            }
            console.log('User Registration succesful');
            return done(null, newUser);
          });
        }
      });
    };

    // Delay the execution of findOrCreateUser and execute
    // the method in the next tick of the event loop
    process.nextTick(findOrCreateUser);
  })
);

// Generates hash using bCrypt
var createHash = function(password){
 return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
}
