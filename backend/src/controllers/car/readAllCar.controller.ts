import { Request, Response } from "express";
import { readAllCarService } from "../../services/car/readAllCar.service";



export const readAllCarController = async (req:Request,res:Response) => {


    try {
        const cars = await readAllCarService();
        return res.status(200).json(cars);
    } catch (err) {
        if(err instanceof Error){
            return res.status(400).json({
                message:err.message
            })
        }
    }
}