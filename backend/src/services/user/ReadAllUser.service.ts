import { IUserReturned } from "../../interfaces/IUser";
import prisma from "../../prisma";



export const ReadAllUserService = async ():Promise<IUserReturned[]> => {

    const users:IUserReturned[] = await prisma.user.findMany()
    
    return users;

}