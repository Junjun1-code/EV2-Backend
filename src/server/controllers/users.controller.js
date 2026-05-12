import * as sql from '../models/users.model.js'
import { jwtSign } from '../../util/auth/jwt.js'

export const register = (req, res) => sql.register(req.body)
    .then((result) => {
        if (result.code){
            res.status(500).json({ status: false, code:500, message: result })
            return
        }
        res.status(201).json({ status: true, code: 201, message: 'Se ha creado un nuevo usuario'})
    })
    .catch((error) => res.status(500).json ({ status: false, code: 500, message: 'No se ha podido crear el usuario'}))

export const login = (req, res) => sql.login(req.body)
    .then((result) => {
        if (result.length ===0){
            res.status(200).json({message: 'Email y/o contraseña no coinciden'})
        }
        const token = jwtSign(result[0])

        res.status(200).json({message: {token} })
    })
    .catch((error) => res.status(500).json({ code:500, message: error}))