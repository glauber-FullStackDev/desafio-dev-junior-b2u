import { PrismaClient } from '@prisma/client'
const express = require('express')
const app = express()
const prisma = new PrismaClient()
import moment from 'moment'

export const RegisterAdverts = app.post(`/adverts`, async (req: any, res: any) => {
    const adverts = await prisma.adverts.create({
        data: {
            model: req.body.model,
            brand: req.body.brand,
            description: req.body.description,
            fabrication: req.body.fabrication,
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            createdAt: moment().format('DD/MM/YYYY'),
            price: req.body.price
        },
    })
        .then(user => { res.send({ message: 'Usuário cadastrado com sucesso!' }); res.status(200); })
        .catch(err => {
            res.send({ message: `Algo deu errado! ${err}` }); res.status(400)
        })
    console.log(adverts)
})
export const FindManyAdverts = app.get(`/adverts`, async (req: any, res: any) => {
    const listAdverts = await prisma.adverts.findMany()
    res.send(listAdverts)
})
export const Delete = app.delete(`/adverts/:id`, async (req: any, res: any) => {
    const id = parseInt(req.params.id)
    const deleteUser = await prisma.adverts.delete({
        where: {
            id: id,
        },
    })
        .then(() => { res.send({ message: 'Deletado com sucesso!' }); res.status(200) })
        .catch((err) => { res.send({ message: 'Erro ao deletar!', details: err }); res.status(400) })
    console.log(deleteUser)
})
export const UpdateAdverts = app.put(`/adverts/:id`, async (req: any, res: any) => {
    const id = parseInt(req.params.id)
    const adverts = await prisma.adverts.update({
        where: {
            id: id,
        },
        data: req.body,
    })
        .then(user => { res.send({ message: 'Usuário atualizado com sucesso!' }); res.status(200); })
        .catch(err => {
            res.send({ message: `Algo deu errado! ${err}` }); res.status(400)
        })
    console.log(adverts)
})

