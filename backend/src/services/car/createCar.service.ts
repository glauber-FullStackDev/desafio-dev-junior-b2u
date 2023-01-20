import { ICar } from "../../interfaces/ICar";
import prisma from "../../prisma";



export const createCarService = async ({donoId,name,marca,ano_fabri,descricao}:ICar) => {

    const newCar = prisma.car.create({
        data:{
            donoId,
            name,
            marca,
            ano_fabri,
            descricao
        }
    })


    return newCar;

}


