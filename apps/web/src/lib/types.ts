import {
  z,
  signInBody,
  signUpBody,
  createCarBody,
  updateCarBody,
} from 'validation'

export type SignInValues = z.infer<typeof signInBody>
export type SignUpValues = z.infer<typeof signUpBody>

export type CreateCarValues = z.infer<typeof createCarBody>
export type UpdateCarValues = z.infer<typeof updateCarBody>

export type Seller = {
  id: number
  name: string
  email: string
  phone: string
  password: string
}

export type Car = {
  id?: string
  name: string
  brand: string
  model_year: number
  description: string
}
