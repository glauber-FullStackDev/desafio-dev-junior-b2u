import { IUser } from "../../interfaces/IUser";
import prisma from "../../prisma";



export const readAllUserService = async ():Promise<IUser[]> => {

    const users:IUser[] = await prisma.user.findMany({
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
    })
    
    return users;

}