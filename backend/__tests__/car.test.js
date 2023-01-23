const app = require('../src/server');
const request = require('supertest');
const { carData, carExpect, wrongCarData, carID, carUpdate, wrongCarUpdate } = require('./mocks');

describe("Rota de cadastro de um carro", () => {
    test('Cadastro de um carro com body correto...', async () => {
        const res = await request(app).post("/carros").send(carData);

        expect(res.statusCode).toEqual(201);
        expect(res.body).toEqual(carExpect);
    });

    test('Cadastro de um carro com body inválido...', async () => {
        const res = await request(app).post("/carros").send(wrongCarData);

        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('mensagem');
    });
});

describe("Rota de listagem de carros", () => {
    test('Listando os carros...', async () => {
        const res = await request(app).get("/carros");

        expect(res.statusCode).toEqual(200);
    });
});

describe("Rota de visualização de um carro", () => {
    test('Visualizando um carro pelo seu ID, quando esse existe...', async () => {
        const res = await request(app).get("/carros/7");

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(carID);
    });

    test('Quando o carro com o ID especificado não existe...', async () => {
        const res = await request(app).get("/carros/1");

        expect(res.statusCode).toEqual(404);
        expect(res.body).toHaveProperty('mensagem');
    });
});

describe("Rota de edição de um carro", () => {
    test('Editando com o body correto...', async () => {
        const res = await request(app).put("/carros/9").send(carUpdate);

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('mensagem');
    });

    test('Editando com o body inválido...', async () => {
        const res = await request(app).put("/carros/9").send(wrongCarUpdate);

        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('mensagem');
    });

    test('Quando o carro com o ID especificado não existe...', async () => {
        const res = await request(app).put("/carros/1").send(carUpdate);

        expect(res.status).toEqual(404);
        expect(res.body).toHaveProperty('mensagem');
    });
});

describe("Rota de exclusão de um carro", () => {
    test('Deletando um carro pelo seu ID, quando esse existe...', async () => {
        const res = await request(app).delete("/carros/20");

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('mensagem');
    });

    test('Quando o carro com o ID especificado não existe...', async () => {
        const res = await request(app).delete("/carros/1");

        expect(res.statusCode).toEqual(404);
        expect(res.body).toHaveProperty('mensagem');
    });
});