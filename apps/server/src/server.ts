import Fastify from 'fastify'
import cors from '@fastify/cors'
import carRoutes from './routes/cars'
import authRoutes from './routes/auth'

const server = async () => {
  const app = Fastify()

  app.register(cors)
  app.register(carRoutes)
  app.register(authRoutes)

  await app
    .listen({
      port: 3001,
    })
    .then(() => {
      console.log('HTTP Server running!')
    })

  return app
}

server()

export default server
