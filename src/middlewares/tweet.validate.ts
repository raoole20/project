import { body } from "express-validator";

export const createTweetValidator = () => [
    body('text')
        .exists()
        .isString()
        .isLength({ min: 3 }),
    body('id')
        .exists()
        .isString()
]