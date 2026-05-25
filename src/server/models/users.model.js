import db from '../database/db_connect.js'
import {encryptPassword, comparePassword } from '../../util/auth/bcrypt.js'

export const register = async ({ email, pass }) => {
    const hashedPassword = await encryptPassword(pass)
    return db('INSERT INTO usuarios (id, email, pass) VALUES (DEFAULT,$1,$2);', [email, hashedPassword] )
}

export const login = async ({ email, pass }) => {
    const result = await db('SELECT * FROM usuarios WHERE email = $1;', [email])

    if (result.length === 0) {
        throw new Error('Usuario no encontrado')
    }
    
    const user = result[0]
    const isMatch = await comparePassword(pass,user.pass)
    
    if (!isMatch) {
        throw new Error('Contraseña incorrecta')
    }

    return {id: user.id, email: user.email }
}

export const readUsers = () => db('SELECT * FROM users;')