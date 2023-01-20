import { Request, Response } from "express";
import { ICar } from "../../interfaces/ICar";
import { readAllCarService } from "../../services/car/readAllCar.service";



export const readAllCarController = async (req:Request,res:Response):Promise<any> => {


    try {
        const cars:ICar[] = await readAllCarService();
        return res.status(200).json(cars);
    } catch (err) {
        if(err instanceof Error){
            return res.status(400).json({
                message:err.message
            })
        }
    }
}