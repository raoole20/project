import { Router } from "express";
import { TweetController } from "../controller/tweet";
import { createTweetValidator } from "../middlewares/tweet.validate";
import { verifyToken } from "../middlewares/verifyToken";

const routeTweet = Router()

const controller = new TweetController()

routeTweet.get('/', controller.getAllTweet)
routeTweet.post('/', createTweetValidator(), verifyToken,controller.create)
routeTweet.put('/:id', controller.update)
routeTweet.delete('/:id', controller.delete)

export default routeTweet