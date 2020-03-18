const Express = require('express');
const router = Express.Router();
const passport = require('passport');
const User = require('../models/user.js');

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.send({
    ...req.user._doc,
    password: null
  });
});

router.post('/register', async (req, res) => {
  const {username, email, password} = req.body;
  User.findOne({username: username},(result, err) => {
    if(result) res.send('User with this username already have existed');
  });
  User.findOne({email: email}, (result, err) => {
    if(result) res.send('User with this email already have existed');
  });
  const newUser = new User({username: username, email: email, password: password});
  const result = await newUser.save();
  res.send(result);
});

router.get('/logout', (req, res) => {
  req.logout();
  res.send('success');
});


module.exports = router;
