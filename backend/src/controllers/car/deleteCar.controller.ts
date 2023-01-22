import { Request, Response } from "express";
import { deleteCarService } from "../../services/car/deleteCar.service";



export const deleteCarController = async (req:Request,res:Response):Promise<any> => {
    res.header("Access-Control-Allow-Origin", "*");
    const id:string = req.params.id

    try {
        await deleteCarService(id);
        return res.status(204).json({});
        
    } catch (err) {
        if(err instanceof Error){
            return res.status(400).json({
                message:err.message
            })
        }
    }
}