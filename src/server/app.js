import express from 'express'

import { serverLog } from './middlewares/serverLog.middleware.js'
// import { medicamentosRouter, personalRouter, usuariosRouter, errors } from './routers/index.js'

const app = express()
const PORT = process.env.PORT ?? 3_000

app.use(cors())
app.use(express.json())

app.use(serverLog)

//app.use(usuariosRouter)
//app.use(medicamentosRouter)
//app.use(personalRouter)
//app.use(errors)

app.listen(PORT, () => console.log('Server UP!!'))

export default app
