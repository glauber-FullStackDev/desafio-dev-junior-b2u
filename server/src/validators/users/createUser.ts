import { z } from "zod";

const userSchema = z.object({
    name: z.string().min(4, { message: 'Nome deve ter 4 caracteres' }),
    email: z.string().email({ message: 'Email incorreto' }),
    password: z.string().min(6, { message: 'Senha deve ter 6 caracteres' }),
    contact_phone: z.string(),
})

export {
    userSchema
}
