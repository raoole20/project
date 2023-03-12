import mongoose, { Schema } from "mongoose";
import { UserI } from "../interfaces";


export const userEntity = () => {
    let userSchema = new mongoose.Schema<UserI>({
        name: {
            type: String, 
            required: true,
        },
        perfilPhoto: {
            type: String,
            default: 'https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg'
        },
        tweets: [{
            type: String
        }],
        email: {
            type: String,
            unique: true,
            required: true
        },
        bio: {
            type: String,
        },
        password: {
            type: String,
            required: true
        }
    })


    return mongoose.models.User || mongoose.model<UserI>('User', userSchema) 
}