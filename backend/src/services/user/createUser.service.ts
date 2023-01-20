import { IUser} from "../../interfaces/IUser";
import prisma from "../../prisma";


export const createUserService = async ({
    name,
    email,
    tel,
}:IUser):Promise<IUser> => {

    const newUser:IUser = await prisma.user.create({
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

    return newUser;

};

