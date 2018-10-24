const express = require('express');
const path = require('path');
const app = express();

const db = require('./queries');

const PORT = 8080;

app.use(express.static(path.join(__dirname + './../')));

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname + './../public/index.html'));
}, db.getCategory);

app.listen(PORT, () => {
  console.log(`Listening to PORT: ${PORT}`);
});
