import { Car } from "../../types/car"
import prisma from "../../prisma"

export const readOneCarService = async (id:string):Promise<Car> => {
    const car:Car = await prisma.car.findFirst({
        where:{
            id
        },
        include:{
            dono:{
                select:{
                    name:true,
                    email:true,
                    tel:true
                }
            }
        }
    })


    return car
}