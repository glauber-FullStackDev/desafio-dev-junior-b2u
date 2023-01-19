import prisma from "../../prisma"


export const deleteUserService = async (id:string):Promise<void> => {

    await prisma.user.delete({
        where:{
            id
        }
    });


}


