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

//create string for database creation
const createTableSQL =
  'CREATE TABLE events (_id serial, "id" varchar(255), "summary" varchar(255), "htmlLink" varchar(255), "start" timestamptz, "end" timestamptz, "createdAt" timestamptz, "updatedAt" timestamptz, "sequence" integer)';
//create string for dropping tables
const dropTableSQL = "DROP TABLE IF EXISTS events";
//create string for insterting data to table
const insertTableSQL =
  'INSERT INTO events ("id", "summary", "htmlLink", "sequence", "createdAt", "updatedAt", "start", "end") VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';

//exporting function
module.exports = function(data) {
  //connecting to pg
  pg.connect(
    //passing address as first argument
    cn,
    //passing function as 2nd argument
    function(err, client, done) {
      //passing droptable string to query method on client
      client.query(dropTableSQL, (err, result) => {
        //passing table creation command to query method on client
        client.query(createTableSQL, (err, result) => {
          if (err) console.log(err);
          //iterating through array passed into fuction
          data.forEach(event => {
            //creating array full of values in object
            const values = Object.values(event);
            //passing insertion query with array of values
            client.query(insertTableSQL, values, (err, res) => {
              if (err) console.log(err);
              // console.log(res);
            });
          });
        });
      });
    }
  );
};

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log("running now");
});
