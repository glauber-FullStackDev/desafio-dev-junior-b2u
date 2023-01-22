import { Request, Response } from "express";
import { readOneCarService } from "../../services/car/readOneCar.service";
import { Car } from "../../types/car";


export const readOneCarController = async (req:Request,res:Response) => {
    res.header("Access-Control-Allow-Origin", "*"); 

    const id:string = req.params.id

    try {
        const car:Car = await readOneCarService(id);
        return res.status(200).json(car);
        
    } catch (err) {
        if(err instanceof Error){
            return res.status(400).json({
                message:err.message
            })
        }
    }
}