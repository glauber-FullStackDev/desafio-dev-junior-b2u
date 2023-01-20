import { Request, Response } from "express";
import { ICar } from "../../interfaces/ICar";
import { createCarService } from "../../services/car/createCar.service";

export const createCarController = async(req:Request,res:Response) => {
    const {donoId,name,marca,ano_fabri,descricao}:ICar = req.body;

    try {
        const newCar = await createCarService({donoId,name,marca,ano_fabri,descricao});
        
        return res.status(201).json(newCar);
        
    } catch (err) {
        if(err instanceof Error){
            return res.status(400).json({
                message:err.message
            })
        }
    }

}


