import db from '../database/db_connect.js'

export const register = ({ email, password, username }) => db('INSERT INTO users (id, username, email, password, usertype) VALUES (DEFAULT,$1,$2,$3,$4);',[username, email, password, 'User'])

export const login = ({ email, password }) => {
    return db('SELECT username, usertype FROM users WHERE email = $1 AND password = $2;', [email, password])
}

export const readUsers = () => db('SELECT * FROM users;')