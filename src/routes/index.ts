import express, { Router } from 'express'
import routeAuth from './auth.route'

const router: Router = express.Router()

router.use('/auth', routeAuth)

export default router