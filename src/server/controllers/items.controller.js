import * as sql from '../models/items.model.js'
import { jwtVerify, jwtDecode } from '../../util/auth/jwt.js'

export const findAll = (req, res) => sql.findAll()
  .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const findByName = (req, res) => sql.findByName(req.params.itemName)
  .then(([result]) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const create = (req, res) => sql.create(req.body)
  .then(([result]) => res.status(201).json({ status: true, code: 201, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const update = (req, res) => sql.update(req.params.id, req.body)
  .then(([result]) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const remove = async (req, res) => {
  const authHeader = req.headers.authorization
  const token = authHeader.split(" ")[1]
  const Decoded = jwtDecode(token)
  const item = await sql.findById(req.params.id)
  console.log(item)

  if (item.length === 0) {
    res.status(404).json({ message: "Objeto no encontrado" })
  }
  console.log(Decoded.username)
  console.log(item.username)
  if (jwtVerify(token) && (Decoded.usertype === 'Administrator' || Decoded.username === item.username)) {
    const result = await sql.remove(req.params.id)
    res.status(200).json({ message: { result } })
  }
  else res.status(403).json({ status: false, code: 403, message: "Acceso denegado." })
}

// export const remove = (req, res) => sql.remove(req.params.id)
//   .then((result) => {
//     const authHeader = req.headers.authorization
//     const token = authHeader.split(" ")[1]
//     const Decoded = jwtDecode(token)
//     if (jwtVerify(token) && (Decoded.usertype === 'Administrator' || Decoded.username === result.username)) res.status(200).json({ message: { result } })
//     else res.status(403).json({ status: false, code: 403, message: "Acceso denegado." })
//   })
//   .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))
