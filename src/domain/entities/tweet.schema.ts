import mongoose from "mongoose"


export const tweetEntity = () => {
    const tweetEschema = new mongoose.Schema({
        text: {
            type: String, 
            required: true
        },
        comments: [{
            type: String,
        }],
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        likes: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }],
        images: [{
            type: String
        }]
    })

    return mongoose.models.Tweet || mongoose.model('Tweet', tweetEschema)
}