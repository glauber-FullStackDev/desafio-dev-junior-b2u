import { User } from "@prisma/client";
import { sign } from "jsonwebtoken";

export function generateToken (user: User) {
    const token = sign({
        id: user.id,
        email: user.email
    }, process.env.TOKEN_SECRET!, {
        expiresIn: '2d'
    })

    return token
}