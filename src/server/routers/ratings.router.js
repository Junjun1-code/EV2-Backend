import { Router } from 'express'
import * as ratingsController from '../controllers/ratings.controller.js'
import { authToken } from '../middlewares/items.middleware.js'

const router = Router()

router.get('/ratings', ratingsController.orderByRatings)
router.get('/ratings/:itemId', ratingsController.findRatingsFromItem)
router.post('/ratings/:itemId', authToken, ratingsController.addRating)
router.put('/ratings/:id', authToken, ratingsController.update)
router.delete('/ratings/:id', authToken, ratingsController.remove)

export default router