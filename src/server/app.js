import express from 'express'

import { serverLog } from './middlewares/serverLog.middleware.js'
import { itemsRouter, ratingsRouter, usersRouter, errors } from './routers/index.js'

const app = express()
const PORT = process.env.PORT ?? 3_000

app.use(express.json())

app.use(serverLog)

app.use(usersRouter)
app.use(itemsRouter)
app.use(ratingsRouter)
app.use(errors)

app.listen(PORT, () => console.log('Server UP!!'))

export default app
