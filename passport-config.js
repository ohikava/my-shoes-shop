const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user');

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  async function(username, password, done) {
    try {
      const user = await User.findOne({email: username});
      if (!user) done(null, false, {message: "User with this email doesnt exist"});
      done(null, user);
  } catch (error) {
      throw error;
    }
  }
));

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findOne({_id: id}, function(err, user) {
    done(err, user);
  });
});
