import { ICar } from "../../interfaces/ICar"
import prisma from "../../prisma"

export const updateCarService = async ({
    donoId,
    name,
    marca,
    ano_fabri,
    descricao,
    id
    }:ICar) =>{


    const car = await prisma.car.update({
        where:{
            id
        },
        data:{
            donoId,
            name,
            marca,
            ano_fabri,descricao
        }
    })
    
    return car;

}