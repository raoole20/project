import { ObjectId } from 'mongoose'

/**
 * *Un usuario puede tener muchos tweets
 * *Un tweet puede tener muchos comentarios
 */

export interface UserI {
    name: string
    lastname: string
    username: string
    bio: string
    foto: string
    password: string
    email: string
    tweets: TweetsI[]
}

export interface TweetsI {
    comments: CommentsI
    userId: ObjectId // referencia al usuario que creo que tweet
    like: string[],
    images: []
}

export interface CommentsI {
    userId: ObjectId // referencia al usuario que creo el comentario
    tweetId: ObjectId // referencia al tweet donde se commento
    message: string 
    likes: [] // arreglos de usuarios que le dieron like al commentario
}
