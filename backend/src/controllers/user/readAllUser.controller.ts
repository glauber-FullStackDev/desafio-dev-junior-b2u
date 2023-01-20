import { Request, Response } from "express";
import { IUser } from "../../interfaces/IUser";
import { readAllUserService } from "../../services/user/readAllUser.service";


export const readAllUserController = async (req:Request,res:Response):Promise<any> => {

    try {

        const users:IUser[] = await readAllUserService();

        return res.status(200).json(users)
        
    } catch (err) {

        if(err instanceof Error){

            return res.status(400).json({
                'message':err.message,

            })
        }
        
    }
}