import { ICar } from "../../interfaces/ICar";
import prisma from "../../prisma";


export const readAllCarService = async ():Promise<ICar[]> => {
    
    const cars:ICar[] = await prisma.car.findMany({
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