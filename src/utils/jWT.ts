import * as jwt from 'jsonwebtoken'

const key = process.env.KEY || 'password_key'

export const createJWT = (payload: any) => {
    return  jwt.sign(payload, key, {
        expiresIn: '1h'
    } )
} 

export const validateJWT = (token: string) => {
    return jwt.verify(token, key)
}