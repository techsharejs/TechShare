const express = require("express");
const app = express();
const PORT = process.env.port || 3535;
const pgp = require("pg-promise")();
const cn = {
  host: "tech-shard.cpbsy7aoy9ye.us-east-2.rds.amazonaws.com",
  port: 5432,
  database: "tech-shard",
  user: "hufflepuffs",
  password: "j]hj5e|gbuOxf6K"
};
const db = pgp(cn);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log("running now");
});
