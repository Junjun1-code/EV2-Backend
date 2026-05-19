import db from '../database/db_connect.js'

export const findAll = () => db('SELECT i.id, i.itemName, i.price, i.stock, i.img, u.username "seller" FROM items i INNER JOIN users u ON i.seller = u.id;')

export const findById = (id) => db('SELECT i.id, i.itemName, i.price, i.stock, i.img, u.username "username" FROM items i INNER JOIN users u ON i.seller = u.id WHERE i.id = ($1);', [id])

export const findByName = (itemName) => 
    db('SELECT i.id, i.itemName, i.price, i.stock, i.img, u.username "seller" FROM items i INNER JOIN users u ON i.seller = u.id WHERE itemName = *$1*;', [itemName])

export const create = ({ itemName, price, stock, img, seller }) =>
    db('INSERT INTO items (id, itemName, price, stock, img, seller) VALUES (DEFAULT, $1, $2, $3, $4, $5) RETURNING *;', [itemName, price, stock, img, seller])

export const update = (id, {itemName, price, stock, img}) =>
    db('UPDATE items SET itemName = $2, price = $3, stock = $4, img = $4 WHERE id = $1 RETURNING *;',[id,itemName,price,stock,img])

export const remove = (id) => 
    db('DELETE FROM items WHERE id = $1 RETURNING *;', [id])