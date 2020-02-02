const express = require('express');
const path = require('path');
const routes = require('./routes/routes.js');


const app = express();

const { PORT = 3000, BASE_PATH } = process.env;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
