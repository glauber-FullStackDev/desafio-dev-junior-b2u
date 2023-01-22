import { z } from "zod";

const carSchema = z.object({
    name: z.string().min(2, { message: 'Nome deve ter 4 caracteres' }),
    description: z.string().min(1, { message: 'A descrição é obrigatória' }),
    brand: z.string().min(1, { message: 'A marca é obrigatória' }),
    year_manufacture: z.coerce.number().gt(0, { message: 'O ano de fabricação é obrigatório' }),
})

export {
    carSchema
}
