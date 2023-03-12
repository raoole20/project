import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { UserI } from "../domain/interfaces";
import { createUser, findUserByEmail } from "../domain/service/auth";
import { comparePassword, createJWT, hasPassword } from "../utils";

export class AuthController {

    async registerUser(req: Request, res: Response) {
        const body = req.body as UserI
        const errors = validationResult(req)

        if(!errors.isEmpty()) 
            return res.status(400).json({
                errors: errors.array()
            })
        
        const password = await hasPassword(body.password)
        body.password = password

        const response = await createUser(body)
        
        if( response.error ) 
            return res.status(404).json(response)
        
        delete response.password

        res.status(201).json({
            message: 'usuario registrado correctamente',
            body
        })
    }

    async loginUser(req: Request, res: Response) {
        const { email, password } = req.body

        const errors = validationResult(req)
        if(!errors.isEmpty()) 
            return res.status(400).json({
                errors: errors.array()
            })
        
        const user = await findUserByEmail(email)

        if(!user) {
            return res.status(404).json({
                error: true,
                message: 'usuario no encontrado'
            })
        }

        const isAuth = await comparePassword(password, user.password)

        if(!isAuth) {
            return res.status(401).json({
                Error: true,
                message: 'Error, password invalida'
            })
        }

        const token = createJWT({
            email: user.email
        })

        delete user.password

        return res.status(200).json({
            message: 'login successfully',
            error: false,
            body: {
                user,
                token: token
            }
        })
    }
}