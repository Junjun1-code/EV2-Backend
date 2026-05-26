INSERT INTO users(id,username,email,password,usertype) VALUES
(DEFAULT, 'Admin', 'Admin@LShopping.com', '1984', 'Administrator'),
(DEFAULT, 'Jorge', 'JorgeCastillo@gmail.com', 'JorgeCrak12', 'User'),
(DEFAULT, 'Rodrigo', 'Rodri123@hotmail.com', 'RojoDorado', 'Premium'),
(DEFAULT, 'Ana', 'AnitaRosada@hotmail.com', 'RositaRoja', 'User');

INSERT INTO items(id,itemName,price,stock,img,user) VALUES
(DEFAULT, 'PC', 340000, 145, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQutrm9ocwLwparIefjD_uFMGR-GqYlx0pzvQ&s', 2),
(DEFAULT, 'Peluche de gato', 24000, 32, 'https://cl-cenco-pim-resizer.ecomm.cencosud.com/unsafe/adaptive-fit-in/3840x0/filters:quality(75)/prd-cl/product-medias/1f619781-b6f4-41b9-ae21-0c570ddba4b9/MK3GT9S14Y/MK3GT9S14Y-3/1734987750479-MK3GT9S14Y-3-1.jpg',3),
(DEFAULT, 'Mochila de viaje', 59000, 41, 'https://https://columbus-outdoor.com/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/image/593bfb5/mochila-de-viaje-columbus-travel-caqui.jpg',3);

INSERT INTO ratings(id, itemId, stars, userId) VALUES
(DEFAULT, 1, 2, 2),
(DEFAULT, 1, 3, 4),
(DEFAULT, 2, 5, 4),
(DEFAULT, 3, 5, 3);

SELECT * FROM users;
SELECT * FROM items;
select * from ratings;