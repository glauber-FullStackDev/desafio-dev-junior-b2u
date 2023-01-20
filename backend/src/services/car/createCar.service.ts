import { ICar, ICarCreated } from "../../interfaces/ICar";
import prisma from "../../prisma";



export const createCarService = async (
    {
        donoId,
        name,
        marca,
        ano_fabri,
        descricao}:ICarCreated):Promise<ICar> => {

    const newCar:ICar = await prisma.car.create({
        data:{
            donoId,
            name,
            marca,
            ano_fabri,
            descricao
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


    return newCar;

}


