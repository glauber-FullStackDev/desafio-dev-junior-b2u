import prisma from "../../prisma"

export const readOneCarService = async (id:string) => {
    const car = await prisma.car.findFirst({
        where:{
            id
        }
    })


    return car
}