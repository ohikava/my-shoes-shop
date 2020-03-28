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
  console.log('1')
  const {name, surname, email, password,password2} = req.body;
  console.log(req.body);
  if (password !== password2) {
    res.send('Passwords dodn`t equal');
  };
  console.log('3')

  User.findOne({email: email}, (result, err) => {
    if(result) res.send('User with this email already have existed');
  });
  console.log('4')
  const newUser = new User({name: name, surname: surname, email: email, password: password});
  console.log(newUser);
  const result = await newUser.save();
  req.login(newUser, (error) => {
    if (error) throw error;
    return res.send({...newUser,
                    password: null});
  });
});

router.get('/logout', (req, res) => {
  req.logout();
  res.send('success');
});


module.exports = router;
