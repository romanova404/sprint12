const cardRouter = require('express').Router();
const fsPromises = require('fs').promises;
const path = require('path');

cardRouter.get('/cards', (req, res) => {
  fsPromises.readFile(path.join(__dirname, '../data/cards.json'))
    .then((data) => {
      const cards = JSON.parse(data);
      res.send(cards);
    })
    .catch(() => {
      res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
    });
});

module.exports = cardRouter;
