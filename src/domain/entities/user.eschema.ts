import mongoose, { Schema } from "mongoose";
import { UserI } from "../interfaces";


export const userEntity = () => {
    let userSchema = new mongoose.Schema<UserI>({
        name: {
            type: String,
            required: true,
            trim: true
        },
        lastname: {
            type: String,
            required: true,
            trim: true
        },
        username: {
            type: String, 
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: true
        },
        bio: {
            type: String,
        },
        foto: {
            type: String,
            default: 'https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg'
        },
        tweets: [{
            type: Schema.Types.ObjectId,
            ref: 'Tweet'
        }],
    })


    return mongoose.models.User || mongoose.model<UserI>('User', userSchema) 
}