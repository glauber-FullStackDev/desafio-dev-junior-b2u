import prisma from "../../prisma";




export const readOneUserService = async (id:string) => {

    const user = await prisma.user.findFirst({
        where:{
            id:id
        }
    });


    return user;
   
}
