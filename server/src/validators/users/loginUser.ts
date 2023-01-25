import { z } from "zod";

const loginSchema = z.object({
    email: z.string().email({ message: 'Email incorreto' }),
    password: z.string().min(6, { message: 'Senha deve ter 6 caracteres' }),
})

export {
    loginSchema
}
