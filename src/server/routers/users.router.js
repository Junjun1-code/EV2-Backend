import { Router } from "express";
import * as usersController from '../controllers/users.controller.js'
import { authToken } from "../middlewares/items.middleware.js";

const router = Router()

router.get('/readUsers', authToken, usersController.readUserList)
router.post('/register', usersController.register)
router.post('/login', usersController.login)
// router.post('/registerAdmin', usersController.registerAdmin)

export default router