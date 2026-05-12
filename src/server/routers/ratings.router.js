import { Router } from 'express'
import * as ratingsController from '../controllers/ratings.controller.js'
import { authToken } from '../middlewares/items.middleware.js'

const router = Router()

router.get('/ratings', ratingsController.findAll)
router.get('/ratings/:itemId', ratingsController.findByName)
router.post('/ratings/:itemId', authToken, ratingsController.create)
router.put('/ratings/:id', authToken, ratingsController.updateById)
router.delete('/ratings/:id', authToken, ratingsController.deleteById)

export default router