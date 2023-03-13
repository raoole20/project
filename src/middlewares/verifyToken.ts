import { NextFunction, Request, Response } from "express";
import { validateJWT } from "../utils";


export const verifyToken  = async (req: Request, res: Response, next: NextFunction) => {
    const bearerHeader = req?.headers['authorization']

    if(typeof bearerHeader === 'undefined' )
        res.status(403).json({
            message: 'Para tener acceso por favor envia un token'
        })
        
    const token = bearerHeader?.split(' ')[1]  

    const isValidToken = await validateJWT(String(token))

    if(!isValidToken)
        res.status(403).json({
            message: 'Token no valido'
        })
    
    req.body = {
        ...req.body,
        token: token
    }
    
    next()
}