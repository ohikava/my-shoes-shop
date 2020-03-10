const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user');

passport.use(new LocalStrategy(
  function(email, password, done) {
    User.findOne({email: email}).then((err, user) => {
      if(err) return done(err);
      if(!user) return done(null, false, {message: 'Incorrect email'})
      if(!user.validatePassword(password)) return done(null, false, {message: 'Incorrect password'});
      return done(null, user);
    });
  }
));

module.exports = passport;
