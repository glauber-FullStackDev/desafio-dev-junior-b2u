import { Request, Response } from "express";
import { readOneCarService } from "../../services/car/readOneCar.service";


export const readOneCarController = async (req:Request,res:Response) => {
    
    const id = req.params.id

    try {
        const car = await readOneCarService(id);
        return res.status(200).json(car);
        
    } catch (err) {
        if(err instanceof Error){
            return res.status(400).json({
                message:err.message
            })
        }
    }
}