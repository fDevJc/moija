const passport = require('passport');
const LocalStorage = require('passport-local').Strategy;

const User = require('../models/user');

module.exports = () => {
  passport.use(
    new LocalStorage({
      usernameField: 'email',
      passwordField: 'password',
    }),
    async (email, password, done) => {
      try {
        const user = await User.findOne({ where: { email } });
        if (user) {
          if (password === user.password) {
            done(null, user);
          } else {
            return done(null, false, { message: 'Incorrect password.' });
          }
        } else {
          return done(null, false, { message: 'Incorrect username.' });
        }
      } catch (err) {
        console.log(err);
      }
    }
  );
};
