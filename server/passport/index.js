const passport = require('passport');
const local = require('passport-local');
const User = require('../models/user');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.email);
  });

  passport.deserializeUser(async (email, done) => {
    try {
      const user = await User.findOne({
        where: { email },
        include: [
          {
            model: User,
            attributes: ['email'],
          },
        ],
      });

      done(null, user);
    } catch (err) {
      done(err);
    }
  });

  local();
};
