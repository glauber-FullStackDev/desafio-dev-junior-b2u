import request from 'supertest'
import { FastifyInstance } from 'fastify'
import server from '../server'

describe('GET /cars', () => {
  let fastify: FastifyInstance

  beforeAll(async () => {
    fastify = await server()
  })

  afterAll(async () => {
    await fastify.close()
  })

  it('should return the expected result', async () => {
    const res = await request(fastify.server).get('/cars').expect(200)
    expect(res.body).toEqual([])
  })
})
