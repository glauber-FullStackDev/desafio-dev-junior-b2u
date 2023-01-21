import { FastifyInstance } from 'fastify'
import bcrypt from 'bcryptjs'
import { signInBody, signUpBody } from 'validation'
import { z } from 'zod'
import prisma from '../lib/prisma'

const authRoutes = async (app: FastifyInstance) => {
  app.post('/signin', async (request, response) => {
    try {
      const { email, password } = signInBody.parse(request.body)
      const seller = await prisma.seller.findUnique({
        where: {
          email,
        },
      })
      if (!seller) {
        response.status(401).send({ message: 'Invalid email or password' })
      } else {
        const isValid = await bcrypt.compare(password, seller.password)
        if (!isValid) {
          response.status(401).send({ message: 'Invalid email or password' })
        }
      }

      response.status(201).send(seller)
    } catch (error) {
      if (error instanceof z.ZodError) {
        response.status(400).send({ message: error.message })
      }

      response.status(500).send({ message: 'Internal Server Error' })
    }
  })

  app.post('/signup', async (request, response) => {
    try {
      const { password, ...body } = signUpBody.parse(request.body)
      const hashedPassword = await bcrypt.hash(password, 10)
      const newSeller = await prisma.seller.create({
        data: {
          ...body,
          password: hashedPassword,
        },
      })

      response.status(201).send(newSeller)
    } catch (error) {
      if (error instanceof z.ZodError) {
        response.status(400).send({ message: error.message })
      }

      response.status(500).send({ message: 'Internal Server Error' })
    }
  })
}

export default authRoutes
