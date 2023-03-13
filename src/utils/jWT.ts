import * as jwt from 'jsonwebtoken'

const key = process.env.KEY || 'password_key'

export const createJWT = (payload: any) => {
    return  jwt.sign(payload, key, {
        expiresIn: '1h'
    } )
} 

export const validateJWT = async (token: string) => {
    try {
        return await jwt.verify(token, key)
    } catch (error) {
        console.log(error)
    }
}