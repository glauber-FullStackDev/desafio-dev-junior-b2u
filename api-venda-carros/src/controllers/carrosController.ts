import { Controller, Delete, Get, Post, Put } from "@overnightjs/core";
import { Request, Response } from "express";
import { Carros } from "../model/carros";

@Controller('api/v1/carros')
export class CarrosController {

    @Get('')
    public async listaCarros(_: Request, res: Response) {
        try {
            const listaDeCarros = await Carros.find();
            res.status(200).json(listaDeCarros)
        } catch (error) {
            res.status(400).json({
                status: 'fail',
                message: (error as Error).message
            });
        }
    }

    @Get(':id')
    public async listaUmCarros(req: Request, res: Response) {
        const id = req.params.id;
        try {
            const carro = await Carros.findById(id);
            res.status(200).json(carro)
        } catch (error) {
            res.status(400).json({
                status: 'fail',
                message: (error as Error).message
            });
        }
    }

    @Post('')
    public async addCarro(req: Request, res: Response) {
        
        const dados = req.body;
        try {
            const carro = await Carros.create(dados);
            res.status(201).json(carro);
        } catch (error) {
            res.status(401).json({
                status: 'fail',
                message: (error as Error).message
            });
        }
    }

    @Put('atualiza/:id')
    public async atualizaCarro(req: Request, res: Response) {
        const id = req.params.id;
        const dados = req.body;

        try {
            const carroAtualizado = await Carros.findByIdAndUpdate(id, dados);
            res.status(200).json(carroAtualizado);
        } catch (error) {
            res.status(400).json({
                status: 'fail',
                message: (error as Error).message
            });
        }
    }

    @Delete('delete/:id')
    public async deletaCarros(req: Request, res: Response) {
        const id = req.params.id;

        try {
            await Carros.findByIdAndDelete(id);
            res.status(200).json({
                status: 'sucess',
                data: `Id ${id} deletado`
                
            })
        } catch (error) {
            res.status(400).json({
                status: 'fail',
                message: (error as Error).message
            });
        }
    }


    
}