const express = require('express');
const router = express.Router();
const passport = require('passport');

const User = require('../models/user');

//auth
router.post('/local-login', async (req, res, next) => {
  passport.authenticate('local', (authErr, user, info) => {
    if (authErr) {
      console.error(authErr);
      return next(authErr);
    }
    if (!user) {
      return res.send('loginErr');
    }
    return req.login(user, (loginErr) => {
      if (loginErr) {
        console.log(loginErr);
        next(loginErr);
      }
      //const json = JSON.parse(JSON.stringify(user));
      return res.send(user);
    });
  })(req, res, next);
});

router.post('/join', async (req, res) => {
  try {
    await User.create({
      email: req.body.email,
      password: req.body.password,
      provider: 'local',
    });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
