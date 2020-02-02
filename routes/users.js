const usery = require('express').Router();
const fsPromises = require('fs').promises;
const path = require('path');


usery.get('/users', (req, res) => {
  fsPromises.readFile(path.join(__dirname, '../data/users.json'))
    .then((data) => {
      const users = JSON.parse(data);
      res.send(users);
    })
    .catch(() => {
      res.status(500).send({ message: 'Запрашиваемый ресурс не найден' });
    });
});

usery.get('/users/:id', (req, res) => {
  const { id } = req.params;

  fsPromises.readFile(path.join(__dirname, '../data/users.json'))
    .then((data) => {
      const users = JSON.parse(data);
      // eslint-disable-next-line no-underscore-dangle
      const user = users.find((item) => item._id === id);

      if (user) {
        res.send(user);
        return;
      }
      if (!user) {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
    })
    .catch(() => {
      res.status(500).send({ message: 'Запрашиваемый ресурс не найден' });
    });
});

module.exports = usery;
