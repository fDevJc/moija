const express = require('express');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const dotenv = require('dotenv');
dotenv.config();

const { sequelize } = require('./models');
//router
const gameRouter = require('./routes/Game');
const authRouter = require('./routes/Auth');
//passport
const passportConfig = require('./passport');
passportConfig();

const app = express();

//세터
app.set('port', process.env.PORT || 3001);
//미들웨어
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);
//데이터베이스
sequelize
  .sync({ forces: false })
  .then(() => {
    console.log('Database connect success');
  })
  .catch((err) => {
    console.log('Database connect err : ', err);
  });

app.use(passport.initialize());
app.use(passport.session());

app.use('/game', gameRouter);
app.use('/auth', authRouter);

app.use((err, req, res, next) => {
  console.log(err);
  res.send('err');
});

app.listen(app.get('port'), () => {
  console.log(`PORT: ${app.get('port')} Server running....`);
});

module.exports = app;
