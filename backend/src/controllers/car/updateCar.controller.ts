import { Request, Response } from "express";
import { ICar } from "../../interfaces/ICar";
import { updateCarService } from "../../services/car/updateCar.service";



export const updateCarController = async (req:Request,res:Response):Promise<any> => {
    
    const id:string = req.params.id
    const {donoId,name,marca,ano_fabri,descricao}:ICar = req.body
    try {
        const car:ICar = await updateCarService({donoId,name,marca,ano_fabri,descricao,id});
        return res.status(200).json(car);
        
    } catch (err) {
        if(err instanceof Error){
            return res.status(400).json({
                message:err.message
            })
        }
    }
}