import db from '../database/db_connect.js'

export const register = ({ email, password, username }) => db('INSERT INTO usuarios (id, username, email, password, usertype) VALUES (DEFAULT,$1,$2,$3,$4);',[username, email, password, 'User'])

export const login = ({ email, pass }) => {
    return db('SELECT email FROM users WHERE email = $1 and pass = $2;', [email, pass])
}
