import * as bcrypt from 'bcrypt'

export const hasPassword = async (password: string) =>{ 
   return await bcrypt.hash(password, 10)
}

export const comparePassword = async (password: string, hasPassword: string) => {
    return await bcrypt.compare(password, hasPassword)
}