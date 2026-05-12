INSERT INTO users(id,username,password,usertype) VALUES
(DEFAULT, 'Admin', 'Admin@LShopping.com', '1984', 'Administrator'),
(DEFAULT, 'Jorge', 'JorgeCastillo@gmail.com', 'JorgeCrak12', 'User'),
(DEFAULT, 'Rodrigo', 'Rodri123@hotmail.com', 'RojoDorado', 'User'),
(DEFAULT, 'Ana', 'AnitaRosada@hotmail.com', 'RositaRoja', 'User');

INSERT INTO items(id,itemName,price,stock,img,username) VALUES
(DEFAULT, 'PC', 340000, 145, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQutrm9ocwLwparIefjD_uFMGR-GqYlx0pzvQ&s', 'Jorge');

INSERT INTO recentSells(id,itemName,totalValue,img,seller) VALUES
(DEFAULT,);

INSERT INTO ratings(id, itemId, stars) VALUES
(DEFAULT, '1', 2),
(DEFAULT, '1', 3);

SELECT * FROM users;
SELECT * FROM items;
select * from recentSells;
select * from ratings;