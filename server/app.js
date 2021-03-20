const express = require('express');
const cors = require('cors');

const { sequelize } = require('./models');
const Game = require('./models/game');

const app = express();
//세터
app.set('port', process.env.PORT || 3001);
//미들웨어
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//데이터베이스
/*
sequelize
  .sync({ forces: false })
  .then(() => {
    console.log('Database connect success');
  })
  .catch((err) => {
    //console.log('Database connect err : ', err);
  });
*/
//게임등록
app.post('/game', async (req, res) => {
  try {
    await Game.create({
      game_gubn: req.body.gameGubn,
      place: req.body.place,
      date: req.body.date,
      timeFrom: req.body.timeFrom,
      timeTo: req.body.timeTo,
    });
    res.status(200).send('ok');
  } catch (err) {
    console.log(err);
    res.status(500).send('err');
  }
});

app.get('/game', async (req, res) => {
  try {
    const data = await Game.findAll({
      model: Game,
      attributes: ['id', 'game_gubn', 'place', 'date', 'timeFrom', 'timeTo'],
    });
    console.log(data);
    return res.json({ code: 200, payload: data });
  } catch (err) {
    console.log(err);
  }
});

//auth
app.post('/auth/local-login', (req, res) => {
  console.log(req.body);
  res.send('wow');
});

app.post('/auth/join', (req, res) => {
  console.log(req.body);
  res.send('ok');
});

app.listen(app.get('port'), () => {
  console.log(`PORT: ${app.get('port')} Server running....`);
});

module.exports = app;
