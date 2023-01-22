import { compareSync, hashSync } from 'bcryptjs'
import { Request, Response } from 'express'
import { prisma } from '../database/prisma'
import { Error } from '../interfaces/Error'
import { generateToken } from '../utils/generateToken'
import { userSchema } from '../validators/users/createUser'
import { loginSchema } from '../validators/users/loginUser'

class UserController {

    async store (req: Request, res: Response) {
        try {
            const { name, email, password, contact_phone } = userSchema.parse(req.body)

            const existsUser = await prisma.user.findUnique({
                where: {
                    email
                }
            })

            if(existsUser) {
                const error: Error = {
                    code: 'BAD_REQUEST',
                    message: 'Email já utilizado',
                    status: 422
                }

                return res.status(+error.status).json({ error })
            }

            const hashPassword = hashSync(password)

            const newUser = await prisma.user.create({
                data: {
                    email, contact_phone, name, password: hashPassword
                }, select: {
                    email: true,
                    password: false,
                    id: true,
                    contact_phone: true,
                    name: true
                }
            })

            return res.status(200).json({ user: newUser, message: 'Usuário criado com sucesso' })

        } catch (err: any) {
            let error: Error | Error[];
            if(err.issues.length > 1){
                error = {
                    code: 'BAD_REQUEST',
                    message: 'Dados inválidos',
                    status: 422
                }
            }else {
                error = {
                    code: 'BAD_REQUEST',
                    message: err.issues[0].message,
                    status: 422
                }
            }
            return res.status(+error.status).json({ error })
        }
        
    }

    async login (req: Request, res: Response) {
        try {
            const { email, password } = loginSchema.parse(req.body)
 
            const user = await prisma.user.findUnique({
                where: {
                    email
                }
            })

            if(!user) {
                const error: Error = {
                    code: 'BAD_REQUEST',
                    message: 'Autenticação inválida!',
                    status: 422
                }

                return res.status(+error.status).json({ error })
            }

            const checkPassword = await compareSync(password, user.password)

            if(!checkPassword) {
                const error: Error = {
                    code: 'BAD_REQUEST',
                    message: 'Autenticação inválida!',
                    status: 422
                }

                return res.status(+error.status).json({ error })
            }

            const token = generateToken(user)

            return res.status(201).json({
                user: { 
                    id: user.id, 
                    name: user.name, 
                    email: user.email, 
                    contact_phone: user.contact_phone,
                    token
                },
                message: 'Autenticação realizada com sucesso'
            })

        } catch (err: any) {
            let error: Error | Error[];
            if(err.issues.length > 1){
                error = {
                    code: 'BAD_REQUEST',
                    message: 'Invalid datas',
                    status: 422
                }
            }else {
                error = {
                    code: 'BAD_REQUEST',
                    message: err.issues[0].message,
                    status: 422
                }
            }
            return res.status(+error.status).json({ error })
        }

    }
}

export default new UserController()