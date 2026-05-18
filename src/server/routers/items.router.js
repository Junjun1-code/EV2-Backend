import { Router } from 'express'
import * as itemsController from '../controllers/items.controller.js'
import { authToken } from '../middlewares/items.middleware.js'

const router = Router()

router.get('/items', itemsController.findAll)
router.get('/items/:itemName', itemsController.findByName)
router.post('/items', authToken, itemsController.create)
router.put('/items/:id', authToken, itemsController.update)
router.delete('/items/:id', authToken,itemsController.remove)

export default router
