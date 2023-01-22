import { z } from "zod";

const carUpdateSchema = z.object({
    name: z.optional(z.string().min(2, { message: 'Nome deve ter 4 caracteres' })),
    description: z.optional(z.string().min(1, { message: 'A descrição é obrigatória' })),
    brand: z.optional(z.string().min(1, { message: 'A marca é obrigatória' })),
    year_manufacture: z.optional(z.coerce.number().gt(0, { message: 'O ano de fabricação é obrigatório' })),
})

export {
    carUpdateSchema
}
