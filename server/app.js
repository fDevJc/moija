const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3001);

const cors = require('cors');

app.use(cors());
app.get('/', (req, res) => {
  res.send({ title: 'Hello Express' });
});

app.listen(app.get('port'), () => {
  console.log('server running....');
});
