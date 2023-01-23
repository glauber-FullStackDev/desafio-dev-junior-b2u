import { IUser } from "../../interfaces/IUser";
import prisma from "../../prisma";

export const updateUserService = async ({
    name,
    email,
    tel,
    id}
    :IUser)
    :Promise<IUser> =>{


    const user:IUser = await prisma.user.update({
        where:{
            id
        },
        data:{
            name,
            email,
            tel
        },
        include:{
            carros:{
                select:{
                    id:true,
                    name:true,
                    marca:true,
                    ano_fabri:true,
                    descricao:true
                }
            }
        }
    });

    return user;

}