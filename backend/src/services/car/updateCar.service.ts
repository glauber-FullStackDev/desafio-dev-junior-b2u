import { ICar } from "../../interfaces/ICar"
import prisma from "../../prisma"

export const updateCarService = async ({
    donoId,
    name,
    marca,
    ano_fabri,
    descricao,
    id
    }:ICar):Promise<ICar> =>{


    const car:ICar = await prisma.car.update({
        where:{
            id
        },
        data:{
            donoId,
            name,
            marca,
            ano_fabri,descricao
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
    
    return car;

}