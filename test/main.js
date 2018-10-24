const express = require("express");
const app = express();
const db = require("./middleWare");
const bodyParser = require("body-parser");

const PORT = process.ENV || 3031;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("sup");
});
app.get("/home", db.getCategory);
app.get("/home/topics", db.getTopics);
app.get("/home/topics/info", db.getInfo);
app.post("/home/topics/info/add", db.addInfo);

app.listen(PORT, () => {
  console.log("hey im up");
});
