import { IUser } from "../../interfaces/IUser";
import prisma from "../../prisma";

export const updateUserService = async ({name,email,tel,id}:IUser):Promise<IUser> =>{


    const user = await prisma.user.update({
        where:{
            id
        },
        data:{
            name,
            email,
            tel
        },
        include:{
            carros:true
        }
    });

    return user;

}