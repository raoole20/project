import { body } from "express-validator";

export const registerValidator = () => [
    body('name')
        .exists()
        .isString()
        .isLength({ min: 3 }),
    body('email')
        .exists()
        .isEmail(),
    body('password')
        .exists()
        .isString()
    // .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, "i")
]

export const loginValidator = () => [
    body('email')
        .exists()
        .isEmail(),
    body('password')
        .exists()
        .isString()
]