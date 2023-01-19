const knex = require('../database/connection');

const registerCar = async (req, res) => {
    const { nome, marca, ano_fabricacao, descricao, nome_dono, email_dono, telefone_dono } = req.body;

    try {
        const registeredCar = await knex('carros').insert({
            nome,
            marca,
            ano_fabricacao,
            descricao,
            nome_dono,
            email_dono,
            telefone_dono
        }).returning('*');

        if (!registeredCar[0]) {
            return res.status(500).json({ mensagem: "Erro interno do servidor." });
        }

        const carData = {
            id: registeredCar[0].id,
            nome: registeredCar[0].nome,
            marca: registeredCar[0].marca,
            ano_fabricacao: registeredCar[0].ano_fabricacao,
            descricao: registeredCar[0].descricao,
            dono: {
                nome: registeredCar[0].nome_dono,
                email: registeredCar[0].email_dono,
                telefone: registeredCar[0].telefone_dono
            }
        };

        return res.status(201).json(carData);

    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
}

const listCars = async (req, res) => {
    try {
        const cars = await knex('carros');

        let carsData = [];

        for (const car of cars) {
            const carData = {
                id: car.id,
                nome: car.nome,
                marca: car.marca,
                ano_fabricacao: car.ano_fabricacao,
                descricao: car.descricao,
                dono: {
                    nome: car.nome_dono,
                    email: car.email_dono,
                    telefone: car.telefone_dono
                }
            };

            carsData.push(carData);
        }

        return res.status(200).json(carsData);

    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
}

const viewCar = async (req, res) => {
    const { id } = req.params;

    try {
        const car = await knex('carros').where({ id }).first();

        if (!car) {
            return res.status(404).json({ mensagem: "O carro não existe." });
        }

        const carData = {
            nome: car.nome,
            marca: car.marca,
            ano_fabricacao: car.ano_fabricacao,
            descricao: car.descricao,
            dono: {
                nome: car.nome_dono,
                email: car.email_dono,
                telefone: car.telefone_dono
            }
        };
        
        return res.status(200).json(carData);

    } catch (error) {
        console.log(error)
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
}

module.exports = {
    registerCar,
    listCars,
    viewCar
}