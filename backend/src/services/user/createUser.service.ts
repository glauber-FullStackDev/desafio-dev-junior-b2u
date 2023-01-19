import { IUserCreatedOrUpdated, IUserReturned } from "../../interfaces/IUser";
import prisma from "../../prisma";


export const createUserService = async ({
    name,
    email,
    tel,
}:IUserCreatedOrUpdated):Promise<IUserReturned> => {

    const newUser = await prisma.user.create({
        data:{
            name,
            email,
            tel
        }
    });

    return newUser;

};

