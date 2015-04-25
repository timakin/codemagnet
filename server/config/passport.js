var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../controller/user.model.js');
var bCrypt = require('bcrypt-nodejs');
var flash = require('connect-flash');

module.exports = function(passport) {
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

    var createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    }

    passport.serializeUser(function(user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
}
