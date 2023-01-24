import { PrismaClient } from '@prisma/client'
const express = require('express')
const app = express()
const prisma = new PrismaClient()

export const RegisterUser = app.post(`/auth`, async (req: any, res: any) => {
    const user = await prisma.user.create({
        data: {
            email: req.body.identifier,
            password: req.body.password
        },
    })
        .then(user => { res.send({ message: 'Usuário cadastrado com sucesso!' }); res.status(200); })
        .catch(err => {
            res.send({ message: `Algo deu errado! ${err}` }); res.status(400)
        })
    console.log(user)
})
export const FindManyUsers = app.get(`/users`, async (req: any, res: any) => {
    const listUsers = await prisma.user.findMany()
    res.send({ users: listUsers })
})
export const Login = app.get(`/auth`, async (req: any, res: any) => {
    const user = await prisma.user.findFirst({
        where: {
            email: req.query.identifier,
            password: req.query.password
        },
    })
    if (user) {
        res.send([user])
        res.send
    } else {
        res.status(404)
        res.send([])
    }

})



