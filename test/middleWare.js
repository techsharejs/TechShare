const pgp = require("pg-promise")();
const cn = {
  host: "tech-shard.cpbsy7aoy9ye.us-east-2.rds.amazonaws.com",
  port: 5432,
  database: "repository",
  user: "hufflepuffs",
  password: "j]hj5e|gbuOxf6K"
};

const db = pgp(cn);

module.exports = {
  getCategory: (req, res, next) => {
    db.any("SELECT * FROM categories")
      .then(data => {
        res.status(200).json({
          data
        });
      })
      .catch(err => {
        return next(err);
      });
  },
  getTopics: (req, res, next) => {
    db.any("SELECT * FROM topics")
      .then(data => {
        res.status(200).json({
          data
        });
      })
      .catch(err => {
        //send err to the next middleware
        return next(err);
      });
  },
  getInfo: (req, res, next) => {
    db.any("SELECT * FROM info")
      .then(data => {
        res.status(200).json({
          data
        });
      })
      .catch(err => {
        res.status(500).json({
          data
        });
      });
  },
  addInfo: (req, res, next) => {
    let infoToAdd = req.body;
    console.log("info", infoToAdd);

    db.one(
      `INSERT INTO info(title,description,topic,info) VALUES(${infoToAdd})`
    )
      .then(data => {
        console.log(data);
        res.status(200);
      })
      .catch(err => {
        return next(err);
      });
  }
};
