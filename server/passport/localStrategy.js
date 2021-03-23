const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
      },
      async (email, password, done) => {
        console.log('localstrategy 1');
        try {
          const user = await User.findOne({ where: { email } });
          console.log('localstrategy 2', user);
          if (user) {
            if (password === user.password) {
              console.log('localstrategy 3');
              done(null, user);
            } else {
              console.log('localstrategy 4');
              return done(null, false, { message: 'Incorrect password.' });
            }
          } else {
            return done(null, false, { message: 'Incorrect username.' });
          }
        } catch (err) {
          console.log(err);
        }
      }
    )
  );
};
