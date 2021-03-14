const express = require('express');

const { Sequelize } = require('sequelize');

const app = express();
const cors = require('cors');

app.set('port', process.env.PORT || 3001);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send({ title: 'Hello Express' });
});

app.post('/game', (req, res, next) => {
  const { place } = req.body;
  console.log(place);

  res.send({ title: 'Hello Express' });
});

const sequelize = new Sequelize('moija', 'root', 'didwl1cjf@@', {
  host: 'localhost',
  dialect: 'mysql',
});

//에러
app.use((err, req, res, next) => {
  console.log(err);
  res.render(err);
});

app.listen(app.get('port'), () => {
  console.log(`PORT: ${app.get('port')} Server running....`);
});
