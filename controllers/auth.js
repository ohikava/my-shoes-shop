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
  const {name, surname, email, password,password2} = req.body;
  if (password !== password2) {
    res.send('Passwords dodn`t equal');
  };

  User.findOne({email: email}, (result, err) => {
    if(result) res.send('User with this email already have existed');
  });
  const newUser = new User({name: name, surname: surname, email: email, password: password});
  const result = await newUser.save();
  req.login(newUser, (error) => {
    if (error) throw error;
    return res.send({...newUser._doc,
                    password: null});
  });
});

router.get('/logout', (req, res) => {
  req.logout();
  res.send('success');
});


module.exports = router;
