const router = require('express').Router();
const cards = require('./cards.js');
const users = require('./users.js');

router.use(users);
router.use(cards);

module.exports = router;
