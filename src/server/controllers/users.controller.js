import * as sql from '../models/users.model.js'
import { jwtSign, jwtVerify, jwtDecode } from '../../util/auth/jwt.js'

export const register = (req, res) => sql.register(req.body)
    .then((result) => {
        if (result.code){
            res.status(500).json({ status: false, code:500, message: result })
            return
        }
        res.status(201).json({ status: true, code: 201, message: 'Se ha creado un nuevo usuario'})
    })
    .catch((error) => res.status(500).json ({ status: false, code: 500, message: error}))

export const login = (req, res) => sql.login(req.body)
    .then((result) => {
        if (result.length ===0){
            res.status(200).json({message: 'Email y/o contraseña no coinciden'})
        }
        const token = jwtSign(result[0])

        res.status(200).json({message: {token} })
    })
    .catch((error) => res.status(500).json({ code:500, message: error}))

export const readUserList = (req, res) => sql.readUsers()
    .then((result) => {
        const authHeader = req.headers.authorization
        const token = authHeader.split(" ")[1]
        // console.log(token)
        // console.log (jwtDecode(token).usertype)
        if( jwtVerify(token) && jwtDecode(token).usertype === 'Administrator') res.status(200).json({message: {result}})
        else res.status(403).json({ status: false, code: 403, message: "Acceso denegado." })
    })
    .catch(() => res.status(403).json({ status: false, code: 403, message: "Acceso denegado." }))