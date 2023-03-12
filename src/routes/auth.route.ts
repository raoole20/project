import { Router } from "express";
import { AuthController } from "../controller/auth";
import { loginValidator, registerValidator } from "../middlewares/auth.validato";

const routeAuth = Router()

const controller =  new AuthController()

routeAuth.post('/register', registerValidator() , controller.registerUser)
routeAuth.post('/login', loginValidator() ,controller.loginUser)

export default routeAuth