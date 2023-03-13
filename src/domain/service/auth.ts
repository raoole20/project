import { userEntity } from "../entities/user.eschema"


export const createUser = async (userData: any) => {
    const model = userEntity()

    try {
        const user = await model.create(userData)
        return user;
    } catch (error: any) {
        console.log(error)
        return handleError(error)
    }
}

export const findUserByEmail = async (email: string) => {
    const model = userEntity()

    try {
        const user = await model.findOne({
            email
        })
        return user
    } catch (error: any) {
        return {
            error: true,
            message: error.message
        }
    }
}

export const findUserById =async (id:string) => {
    const model = userEntity()

    try {
        const user = await model.findById(id)
        return user
    } catch (error: any) {
        return {
            error: true,
            message: error.message
        }
    }
}


const handleError = async (error: any) => {
    if(error.code === 11000) 
        return {
            error: true,
            message: `Ya existe un usuario con el correo ${error.keyValue.email}` 
        }

    return {
        error: true,
        message: 'algo salio mal, por favor mirar la consola'
    }
}