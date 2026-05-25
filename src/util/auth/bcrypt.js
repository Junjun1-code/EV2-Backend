// Implements bcrypt functionality

import bcrypt from 'bcrypt'

// Encriptar contraseña
export const encryptPassword = async (pass) => {
    return await bcrypt.hash(pass.trim(), 10)
}

// Comparar contraseña
export const comparePassword = async (pass, hashedPassword) => {
    return await bcrypt.compare(
        pass.trim(),
        hashedPassword
    )
}