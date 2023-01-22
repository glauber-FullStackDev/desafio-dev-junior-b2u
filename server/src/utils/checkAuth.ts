import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken';
import { Error } from '../interfaces/Error'

interface UserDecoded {
    id: string
}

export async function checkAuth(req: Request, res: Response, next: NextFunction) {
    const error: Error = {
        code: 'BAD_REQUEST',
        message: 'Token inválido',
        status: 422
    };
    const authorization = req.headers.authorization

    if(!authorization) {
        return res.status(+error.status).json({ error }) 
    }

    try {
        const [, token] = authorization.split(' ')
        if(!token) {
            return res.status(+error.status).json({ error })  
        }

        const tokenDecoded = await verify(token, process.env.TOKEN_SECRET!)

        if(tokenDecoded) {
            const { id } = tokenDecoded as UserDecoded

            req.userId = id

            next()
        }

    } catch (err) {
        error.status = 500

        return res.status(+error.status).json({ error }) 
    }
}