import { IUser} from "../../interfaces/IUser";
import prisma from "../../prisma";


export const createUserService = async ({
    name,
    email,
    tel,
}:IUser):Promise<IUser> => {

    const newUser = await prisma.user.create({
        data:{
            name,
            email,
            tel
        },
        include:{
            carros:true
        }
    });

    return newUser;

};

