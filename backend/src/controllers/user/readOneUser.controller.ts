import { Request, Response } from "express";
import { IUser } from "../../interfaces/IUser";
import { readOneUserService } from "../../services/user/readOneUser.service";


export const readOneUserController = async (req:Request,res:Response) => {
    const id:string = req.params.id;
    try {
        const user = await readOneUserService(id);

        return res.status(200).json(user);
        
    } catch (err) {
        if(err instanceof Error){
            return res.status(400).json({
                'message':err.message
            })
        }
    }
};

