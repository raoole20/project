import { Request, Response} from 'express'
import { validationResult } from 'express-validator'
import { isValidObjectId } from 'mongoose'
import { findUserById } from '../domain/service/auth'
import { createTweet, deleteTweets, getAllTweets } from '../domain/service/tweets'

export class TweetController {

    async getAllTweet(req: Request, res: Response) {
        const response = await getAllTweets()

        return res.status(200).json({
            message: 'Se a traido todos los tweets',
            tweets: response
        })
    } 

    async create(req: Request, res: Response) {
        const { text, images, userId, token } = req.body

        const errors = validationResult(req)
        
        if(!errors.isEmpty()) 
        return res.status(400).json({
            errors: errors.array()
        })
    
        if ( !isValidObjectId(userId) ) 
            return res.status(400).json({
                message: `id ${userId} no es un id valido de mongo`
            })

        const user = await findUserById(userId)
        

        if(user?.error || !user) 
            return res.status(404).json({
                message: `El usuario con el id ${userId} no existe en la base de datos`
            })
        
        const tweet = await createTweet({text, images, userId: userId})
        console.log(tweet)

        if( !tweet || tweet.error ) {
            return res.status(400).json(tweet)
        }

        user?.tweet?.push(tweet._id)
        user?.save()

        return res.status(201).json({
            message: 'create success',
            body: {
                text,
                images, 
                token
            }
        })
    } 

    update(req: Request, res: Response) {} 

    async delete(req: Request, res: Response) {
        const { id } = req.params
   
        if ( !isValidObjectId(id) ) 
            return res.status(400).json({
                message: `id ${id} no es un id valido de mongo`
            })
        
        const response = await deleteTweets(id)
        
        if(response?.error) 
            return res.status(500).json({
                message: 'algo salio mal al borrar'
            })
        
        return res.status(200).json({
            message: 'tweet delete success'
        })
    } 
}