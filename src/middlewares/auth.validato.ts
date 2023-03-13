import { body } from "express-validator";

export const registerValidator = () => [
    body('name')
        .exists()
        .isString()
        .isLength({ min: 3 }),
    body('lastname')
        .exists()
        .isString()
        .isLength({ min: 3 }),
    body('username')
        .exists()
        .isString()
        .isLength({ min: 3 }),
    body('email')
        .exists()
        .isEmail(),
    body('password')
        .exists()
        .isString()
]

export const loginValidator = () => [
    body('email')
        .exists()
        .isEmail(),
    body('password')
        .exists()
        .isString()
]