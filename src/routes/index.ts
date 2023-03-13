import express, { Router } from 'express'
import routeAuth from './auth.route'
import routeTweet from './tweet.route'

const router: Router = express.Router()

router.use('/auth', routeAuth)
router.use('/tweet', routeTweet)

export default router