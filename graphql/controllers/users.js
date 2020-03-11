
module.exports = {
  login: (args, request) => {
    passport.authenticate('local');

  }
}
