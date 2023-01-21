import { FastifyInstance } from 'fastify'
import { createCarBody, updateCarBody } from 'validation'
import prisma from '../lib/prisma'

const carRoutes = async (app: FastifyInstance) => {
  app.get('/cars', async (_, response) => {
    const cars = await prisma.car.findMany({
      orderBy: {
        model_year: 'asc',
      },
    })

    response.status(200).send(cars)
  })

  app.get('/car/:id', async (request, response) => {
    const { id } = request.params as any

    const car = await prisma.car.findUnique({
      where: {
        id,
      },
    })

    response.status(200).send(car)
  })

  app.post('/car', async (request, response) => {
    const data = createCarBody.parse(request.body)

    const car = await prisma.car.create({ data })

    response.status(201).send(car)
  })

  app.put('/car/:id', async (request, response) => {
    const { id } = request.params as any
    const data = updateCarBody.parse(request.body)

    const updatedCar = await prisma.car.update({
      where: { id },
      data: {
        ...data,
      },
    })

    response.status(200).send(updatedCar)
  })

  app.delete('/car/:id', async (request, response) => {
    const { id } = request.params as any

    await prisma.car.delete({ where: { id } })

    response.status(204)
  })
}

export default carRoutes
