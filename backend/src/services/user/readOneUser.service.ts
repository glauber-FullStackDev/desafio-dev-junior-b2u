import { IUserReturned } from "../../interfaces/IUser";
import prisma from "../../prisma";

type OneUser = IUserReturned | null // passar para types dps?


export const readOneUserService = async (id:string):Promise<OneUser> => {

    const user = await prisma.user.findUnique({
        where:{
            id:id
        }
    });


    return user;
   
}
