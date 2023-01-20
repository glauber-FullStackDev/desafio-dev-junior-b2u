import prisma from "../../prisma"

export const deleteCarService = async (id:string) =>{

    await prisma.car.delete({
        where:{
            id
        }
    })

}