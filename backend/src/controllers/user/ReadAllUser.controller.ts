import { Request, Response } from "express";
import { IUserCreatedOrUpdated } from "../../interfaces/IUser";
import { ReadAllUserService } from "../../services/user/ReadAllUser.service";


export const readAllUserController = async (req:Request,res:Response) => {

    try {

        const users:IUserCreatedOrUpdated[] = await ReadAllUserService();

        return res.status(200).json(users)
        
    } catch (err) {

        if(err instanceof Error){

            return res.status(400).json({
                'message':err.message,

            })
        }
        
    }
}