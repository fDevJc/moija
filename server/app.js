const express = require('express');
const cors = require('cors');

const { sequelize } = require('./models');

const app = express();
//세터
app.set('port', process.env.PORT || 3001);
//미들웨어
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//데이터베이스
sequelize
  .sync({ forces: false })
  .then(() => {
    console.log('Database connect success');
  })
  .catch((err) => {
    console.log('Database connect err : ', err);
  });

//게임등록
app.post('/game', (req, res) => {
  console.log(req.body);
  res.status(200).send('wow');
});

app.listen(app.get('port'), () => {
  console.log(`PORT: ${app.get('port')} Server running....`);
});

module.exports = app;
