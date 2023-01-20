import { Request, Response } from "express";
import { readOneUserService } from "../../services/user/readOneUser.service";
import { User } from "../../types/user";


export const readOneUserController = async (req:Request,res:Response):Promise<any> => {
    const id:string = req.params.id;
    try {
        const user:User = await readOneUserService(id);

        return res.status(200).json(user);
        
    } catch (err) {
        if(err instanceof Error){
            return res.status(400).json({
                'message':err.message
            })
        }
    }
};

