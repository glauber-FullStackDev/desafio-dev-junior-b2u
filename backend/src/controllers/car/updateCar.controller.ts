import { Request, Response } from "express";
import { updateCarService } from "../../services/car/updateCar.service";



export const updateCarController = async (req:Request,res:Response) => {
    
    const id = req.params.id
    const {donoId,name,marca,ano_fabri,descricao} = req.body
    try {
        const car = await updateCarService({donoId,name,marca,ano_fabri,descricao,id});
        return res.status(200).json(car);
        
    } catch (err) {
        if(err instanceof Error){
            return res.status(400).json({
                message:err.message
            })
        }
    }
}