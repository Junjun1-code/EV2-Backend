import db from '../database/db_connect.js'

export const orderByRatings = () => db('SELECT r.AVG(rating), i.itemName, i.stock, i.price FROM ratings r GROUP BY $1 INNER JOIN items i ORDER BY r.AVG(ratings);' ['itemName'])

export const findRatingsFromItem = (itemName) => db('SELECT * FROM ratings INNER JOIN items WHERE itemName = $1;' [itemName])

export const addRating = ({ itemId, stars }) => db('INSERT INTO ratings VALUES(DEFAULT, $1, $2);' [itemId, stars])

export const update = (id, {stars}) =>
    db('UPDATE ratings stars = $2, WHERE id = $1 RETURNING *;',[id, stars])

export const remove = (id, itemId) => db('DELETE FROM ratings WHERE id = $1 AND itemId = $2 RETURNING *;', [id, itemId])