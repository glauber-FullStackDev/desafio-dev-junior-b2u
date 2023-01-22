import { Request, Response } from "express";
import { ICar, ICarCreated } from "../../interfaces/ICar";
import { createCarService } from "../../services/car/createCar.service";

export const createCarController = async(req:Request,res:Response):Promise<any> => {
    const {donoId,name,marca,ano_fabri,descricao}:ICarCreated = req.body;
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const newCar:ICar = await createCarService({donoId,name,marca,ano_fabri,descricao});
        
        return res.status(201).json(newCar);
        
    } catch (err) {
        if(err instanceof Error){
            return res.status(400).json({
                message:err.message
            })
        }
    }

}


