import prisma from "../../prisma";




export const readOneUserService = async (id:string) => {

    const user = await prisma.user.findFirst({
        where:{
            id:id
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
