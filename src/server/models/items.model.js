import db from '../database/db_connect.js'

export const findAll = () => db('SELECT * FROM items;')

export const findByName = (itemName) => db('SELECT * FROM items WHERE itemName = *$1*;', [itemName])

export const create = ({ itemName, price, stock, img, username }) =>
    db('INSERT INTO items (id, itemName, price, stock, img, username) VALUES (DEFAULT, $1, $2, $3, $4, $5) RETURNING *;', [itemName, price, stock, img, username])

export const update = (id, {itemName, price, stock, img}) =>
    db('UPDATE items SET itemname = $2, price = $3, stock = $4, img = $4 WHERE id = $1 RETURNING *;',[id,itemName,price,stock,img])

export const remove = (id, username) => db('DELETE FROM items WHERE id = $1 AND username = $2 RETURNING *;', [id, username])