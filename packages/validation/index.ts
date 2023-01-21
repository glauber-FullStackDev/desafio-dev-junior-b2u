import { z } from 'zod'

export const createCarBody = z.object({
  name: z.string().min(1),
  brand: z.string().min(1),
  model_year: z.coerce.number().min(1886).max(new Date().getFullYear()),
  description: z.string().min(1)
})

export const updateCarBody = createCarBody.optional()

export const signInBody = z.object({
  email: z.string().min(1).email(),
  password: z.string().min(8).max(255)
})

export const signUpBody = z.object({
  name: z.string().min(3).max(255),
  email: z.string().email(),
  phone: z.string().min(8).max(15),
  password: z.string().min(8).max(255)
})

export { z }
