-- DROP DATABASE libreShopping;
-- DROP TABLE users;
-- DROP TABLE items;
-- DROP TABLE recentSells;
-- DROP TABLE ratings;

CREATE DATABASE libreShopping;

\c libreShopping;
CREATE TABLE users(
  id serial PRIMARY KEY,
  username varchar NOT NULL,
  email varchar NOT NULL,
  password varchar NOT NULL,
  userType varchar NOT NULL
);

CREATE TABLE items(
  id serial PRIMARY KEY,
  itemName varchar NOT NULL,
  price int NOT NULL,
  stock int NOT NULL CHECK (stock >= 0),
  img varchar NOT NULL,
  seller int NOT NULL REFERENCES users(id)
);


CREATE TABLE ratings(
  id serial PRIMARY KEY,
  itemId int NOT NULL REFERENCES items(id),
  stars int NOT NULL CHECK (stars >= 0 AND stars <=5),
  userId int NOT NULL REFERENCES users(id)
);