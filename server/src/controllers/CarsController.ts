import { Car } from '@prisma/client'
import { Request, Response } from 'express'
import { prisma } from '../database/prisma'
import { CarUpdate } from '../interfaces/CarUpdate'
import { Error } from '../interfaces/Error'
import { carSchema } from '../validators/cars/createCar'
import { carUpdateSchema } from '../validators/cars/updateCars'
import path, { extname } from 'path'
const error: Error = {
    code: 'BAD_REQUEST',
    message: '',
    status: 422
}

class CarsController {
    async index (req: Request, res: Response) {
        const { skip, take } = req.query

        const cars = await prisma.car.findMany({
            include: {
                User: {
                    select: {
                        name: true, email: true, contact_phone: true
                    }
                }
            },
            skip: skip ? +skip : 0, 
            take: take ? +take : 10
        })
        
        return res.status(200).json({ cars })
    }

    async carForId (req: Request, res: Response) {
        const { carId } = req.params

        const car = await prisma.car.findUnique({
            where: {
                id: carId
            },
            include: {
                User: {
                    select: {
                        name: true, email: true, contact_phone: true
                    }
                }
            }
        })

        if(!car){
            error.message = 'Carro não encontrado!'
            error.status = 404
            return res.status(+error.status).json({ error })
        }

        return res.status(200).json({ car })
    }

    async userLoggedCars (req: Request, res: Response) {
        const userId = req.userId
        const userCars = await prisma.car.findMany({
            where: {
                userId
            },
        })

        if(!userCars){
            error.message = 'Nenhum carro foi encontrado'
            error.status = 404
            return res.status(+error.status).json({ error })
        }

        return res.status(200).json({ cars: userCars })
    }

    async store (req: Request, res: Response, err: any) {
        try {
            const idUser = req.userId
            const user = await prisma.user.findUnique({
                where: {
                    id: idUser
                }
            })
 
            if(!user) {
                error.message = 'Usuário não encontrado'
                return res.status(+error.status).json({ error })
            }

            const { name, description, brand, year_manufacture } = carSchema.parse(req.body)

            if(!req.file) {
                error.message = 'Imagem é obrigatória'
                return res.status(+error.status).json({ error })
            }
            const extNameFile = extname(req.file.filename)
            if(extNameFile !== '.png' && extNameFile !== '.jpg' && extNameFile !== '.jpeg'){
                error.message = 'Imagem inválida(apenas png ou jpg)'
                return res.status(+error.status).json({ error })
            }

            const newCar = await prisma.car.create({
                data: {
                    name, description, brand, year_manufacture,
                    image: req.file.filename,
                    userId: req.userId
                }
            })

            return res.status(201).json({ 
                car: newCar,
                message: 'Carro criado com sucesso'
            })

        } catch (err: any) {
            if(err.issues.length > 1){
                error.message = 'Dados inválidos'
            }else {
                error.message = err.issues[0].message
            }
            return res.status(+error.status).json({ error })
        }
        
    }

    async update (req: Request, res: Response) {
        try {
            const { carId } = req.params
            const { name, description, brand, year_manufacture } = carUpdateSchema.parse(req.body)

            const carUpdate = await prisma.car.findFirst({
                where: {
                    id: carId,
                    userId: req.userId
                }
            })

            if(!carUpdate) {
                error.message = 'Carro não encontrado'
                error.status = 404
                return res.status(+error.status).json({ error })
            }

            const datasUpdateCar: CarUpdate = {} 

            if(name) datasUpdateCar.name = name
            if(description) datasUpdateCar.description = description
            if(brand) datasUpdateCar.brand = brand
            if(year_manufacture) datasUpdateCar.year_manufacture = +year_manufacture
            if(req.file) datasUpdateCar.image = req.file.filename

            await prisma.car.update({
                where: { id: carUpdate.id },
                data: datasUpdateCar
            })
            
            return res.status(201).json({ message: 'Carro atualizado com sucesso' })
        } catch (err: any) {
            if(err.issues.length > 1){
                error.message = 'Dados inválidos'
            }else {
                error.message = err.issues[0].message
            }
            return res.status(+error.status).json({ error })
        }
        
        
    }

    async delete (req: Request, res: Response) {
        const { carId } = req.params

        const carDelete = await prisma.car.findFirst({
            where: {
                id: carId,
                userId: req.userId
            }
        })

        if(!carDelete) {
            error.message = 'Carro não encontrado'
            error.status = 404
            return res.status(+error.status).json({ error })
        }

        await prisma.car.delete({
            where: {
                id: carDelete.id
            }
        })

        return res.status(200).json({ message: 'Carro deletado com sucesso' })

    }

    async countCarRegister (req: Request, res: Response) {
        const count = await prisma.car.count()

        return res.status(200).json({ count })
    }
}

export default new CarsController()