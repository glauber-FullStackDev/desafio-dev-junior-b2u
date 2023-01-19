import { IUser } from "../../interfaces/IUser";
import prisma from "../../prisma";




export const readOneUserService = async (id:string) => {

    const user:IUser = await prisma.user.findFirst({
        where:{
            id:id
        }
    });


    return user;
   
}
