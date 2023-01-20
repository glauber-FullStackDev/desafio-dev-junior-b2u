import { Request, Response } from "express";
import { deleteUserService } from "../../services/user/deleteUser.service";


export const deleteUserController = async(req:Request,res:Response):Promise<any> => {

    const id:string = req.params.id
    try {
        await deleteUserService(id);
        
        return res.status(204).json({})
    } catch (err) {
        if(err instanceof Error){
            return res.status(400).json({
                'message':err.message
            })
        }
    }
}