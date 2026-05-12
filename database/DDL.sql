-- DROP DATABASE libreShopping;
-- DROP TABLE medicamentos;
-- DROP TABLE personal;

CREATE DATABASE libreShopping;

\c libreShopping;
CREATE TABLE users(
  id serial,
  username varchar NOT NULL,
  email varchar PRIMARY KEY NOT NULL,
  password varchar NOT NULL,
  userType varchar NOT NULL
);

CREATE TABLE items(
  id serial PRIMARY KEY,
  itemName varchar NOT NULL,
  price int NOT NULL,
  stock int NOT NULL CHECK (stock >= 0),
  img varchar NOT NULL,
  seller varchar FOREIGN KEY FROM users(username) NOT NULL
);

CREATE TABLE recentSells(
  id serial PRIMARY KEY,
  itemName varchar FOREIGN KEY FROM items(itemName) NOT NULL,
  totalValue int NOT NULL,
  itemAmmount int NOT NULL,
  img varchar NOT NULL
  seller varchar FOREIGN KEY FROM items(username) NOT NULL
);

CREATE TABLE ratings(
  id serial PRIMARY KEY,
  itemId varchar FOREIGN KEY FROM items(id) NOT NULL,
  stars number NOT NULL CHECK (number >= 0 AND number <=5)
)