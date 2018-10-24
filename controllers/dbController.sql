DROP DATABASE IF EXISTS topics;
CREATE DATABASE topics;

-- \c topics;

CREATE TABLE pups
(
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
);

INSERT INTO topics
  (name)
VALUES
  ('Nodejs');