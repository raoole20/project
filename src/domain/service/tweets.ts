import { tweetEntity } from "../entities/tweet.schema";


const model = tweetEntity()

export const createTweet = async (body: any) => {
    try {
        const tweet = await model.create(body)
        return tweet    
    } catch (error) {
        console.log(error)
        return {
            error: true,
            message: 'algo salio mal al crear el usuario, verifica los datos enviados'
        }
    }

}

export const getAllTweets =async () => {
    try {
        const tweets = await model.find()
        return tweets
    } catch (error) {
        console.log(error)
        return {
            error: true,
            message: 'algo salio mal al traer los tweets'
        }
    }    
}

export const deleteTweets = async (id:string) => {
    try {
        const res = await model.findOneAndDelete({ _id: id })
        return res
    } catch (error) {
        console.log(error)
        return {
            error: true,
            message: 'algo salio mal ver la consola'
        }
    }
}