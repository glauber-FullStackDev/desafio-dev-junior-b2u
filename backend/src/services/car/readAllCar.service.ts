import prisma from "../../prisma";


export const readAllCarService = async () => {
    
    const cars = await prisma.car.findMany({
        include:{
            dono:{
                select:{
                    name:true,
                    email:true,
                    tel:true
                }
            }
        }
    });
    return cars;
}