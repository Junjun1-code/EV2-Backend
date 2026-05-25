import * as sql from '../models/ratings.model.js'

export const orderByRatings = (req, res) => sql.orderByRatings()
  .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const findRatingsFromItem = (req, res) => sql.findRatingsFromItem(req.params.itemName)
  .then(([result]) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const addRating = (req, res) => sql.addRating(req.body)
  .then(([result]) => res.status(201).json({ status: true, code: 201, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const update = async (req, res) => {
  const authHeader = req.headers.authorization
  if (!authHeader) return res.status(401).json({ status: false, code: 401, message: 'Token missing' })
  const parts = authHeader.split(' ')
  if (parts.length !== 2) return res.status(401).json({ status: false, code: 401, message: 'Invalid Authorization header' })
  const token = parts[1]

  let Decoded
  try {
    Decoded = jwtVerify(token)
  } catch (err) {
    return res.status(401).json({ status: false, code: 401, message: 'Invalid token' })
  }

  const items = await sql.findById(req.params.id)
  if (!items || items.length === 0) return res.status(404).json({ status: false, code: 404, message: 'Objeto no encontrado' })
  const item = items[0]
  console.log(Decoded)
  console.log(item)
  if (Decoded.username === item.username) {
    const result = await sql.update(req.params.id, req.body)
    return res.status(200).json({ status: true, code: 200, message: result })
  }

  return res.status(403).json({ status: false, code: 403, message: 'Acceso denegado.' })
}

export const remove = async (req, res) => {
  const authHeader = req.headers.authorization
  if (!authHeader) return res.status(401).json({ status: false, code: 401, message: 'Token missing' })
  const parts = authHeader.split(' ')
  if (parts.length !== 2) return res.status(401).json({ status: false, code: 401, message: 'Invalid Authorization header' })
  const token = parts[1]

  let Decoded
  try {
    Decoded = jwtVerify(token)
  } catch (err) {
    return res.status(401).json({ status: false, code: 401, message: 'Invalid token' })
  }

  const items = await sql.findById(req.params.id)
  if (!items || items.length === 0) return res.status(404).json({ status: false, code: 404, message: 'Objeto no encontrado' })
  const item = items[0]
  console.log(Decoded)
  console.log(item)
  if (Decoded.usertype === 'Administrator' || Decoded.username === item.username) {
    const result = await sql.remove(req.params.id)
    return res.status(200).json({ status: true, code: 200, message: result })
  }

  return res.status(403).json({ status: false, code: 403, message: 'Acceso denegado.' })
}