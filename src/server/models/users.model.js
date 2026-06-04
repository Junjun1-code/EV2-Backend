import db from '../database/db_connect.js'
import {encryptPassword, comparePassword } from '../../util/auth/bcrypt.js'

export const register = async ({ username, email, password }) => {
    const hashedPassword = await encryptPassword(password)
    return db('INSERT INTO users (id, username, email, password, usertype) VALUES (DEFAULT,$1,$2,$3,$4);', [username, email, hashedPassword, "User"] )
}

// export const registerAdmin = async ({ username, email, password }) => {
//     const hashedPassword = await encryptPassword(password)
//     return db('INSERT INTO users (id, username, email, password, usertype) VALUES (DEFAULT,$1,$2,$3,$4);', [username, email, hashedPassword, "Administrator"] )
// }

export const login = async ({ email, password }) => {
    const result = await db('SELECT * FROM users WHERE email = $1;', [email])

    if (result.length === 0) {
        throw new Error('Email y/o contraseña no coinciden')
    }
    
    const user = result[0]
    const isMatch = await comparePassword(password,user.password)
    
    if (!isMatch) {
        throw new Error('Email y/o contraseña no coinciden')
    }

    return {username: user.username, usertype: user.usertype }
}

export const readUsers = () => db('SELECT * FROM users;')