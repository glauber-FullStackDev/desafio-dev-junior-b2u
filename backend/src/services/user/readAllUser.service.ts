import { IUser } from "../../interfaces/IUser";
import prisma from "../../prisma";



export const readAllUserService = async ():Promise<IUser[]> => {

    const users:IUser[] = await prisma.user.findMany()
    
    return users;

}