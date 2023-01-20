import prisma from "../../prisma"

export const deleteCarService = async (id:string):Promise<void> =>{

    await prisma.car.delete({
        where:{
            id
        }
    })

}