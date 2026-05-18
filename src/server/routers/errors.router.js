import { Router } from 'express'
import * as errorsController from '../controllers/errors.controller.js'

const router = Router()

router.use(errorsController.notFound)

export default router