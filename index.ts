import * as dotenv from 'dotenv'
import express, { Express } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { LogSuccess, LogError } from './src/utils/logger'
import router from './src/routes'

dotenv.config()

const app: Express = express()
const MONGO_URI = process.env.MONGO_URI || ''
const PORT = process.env.PORT || 3000

// middleware
app.use(express.json())
app.use(cors())

// Route
app.use('/api/v1' ,router)

app.listen(PORT, () => {
    LogSuccess(`server iniciado http://localhost:${PORT}`)

    mongoose.connect(MONGO_URI)
        .then(() => LogSuccess('Se a connectado a la base de datos'))
        .catch(() => LogError('No se a podido conectar a la base de datos') )
})

