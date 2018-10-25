const express = require("express");
const app = express();

const db = require("./queries");

const PORT = 8080;

app.get('/', db.getCategory);
// app.get('/home/frontend', db.getTopics);
// app.get('/topics', db.getTopics);

app.listen(PORT, () => {
  console.log(`Listening to PORT: ${PORT}`);
});
