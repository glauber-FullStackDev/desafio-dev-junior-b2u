import { NextFunction, Request, Response } from "express";


export const bodyRequestCarMiddleware = async(req:Request,res:Response,next:NextFunction) => {

    const {donoId,name,marca,ano_fabri,descricao} = req.body
    
    if(!donoId || !name || !marca || !ano_fabri || !descricao) return res.status(400).json({
        donoId:donoId || "O id do dono é obrigatório",
        name:name || "Nome é obrigatório",
        marca:marca || "Marca do carro é obrigatória",
        ano_fabri: ano_fabri || "O ano de fabricação é obrigatório",
        descricao: descricao || "A descrição do carro é obrigatória"
    });

    next();
}