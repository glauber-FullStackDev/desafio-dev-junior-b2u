const app = require('../src/server');
const request = require('supertest');
const { carData, carExpect, wrongCarData } = require('./mocks');

describe("Rota de cadastro de um carro", () => {
    test('Cadastro de um carro com body correto', async () => {
        const res = await request(app).post("/carros").send(carData);

        expect(res.statusCode).toEqual(201);
        expect(res.body).toEqual(carExpect);
    });

    test('Cadastro de um carro com body inválido', async () => {
        const res = await request(app).post("/carros").send(wrongCarData);

        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('mensagem');
    })
});