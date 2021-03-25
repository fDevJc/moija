const express = require('express');
const router = express.Router();

const Game = require('../models/game');

//게임등록
router.post('/', async (req, res) => {
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

router.get('/', async (req, res) => {
  try {
    const data = await Game.findAll({
      model: Game,
      attributes: ['id', 'game_gubn', 'place', 'date', 'timeFrom', 'timeTo'],
    });
    return res.json({ code: 200, payload: data });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
