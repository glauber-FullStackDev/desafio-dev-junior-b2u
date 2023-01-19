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
        console.log(error);
        return res.status(500).json({ mensagem: "Erro interno do servidor." });
    }
}

module.exports = {
    registerCar
}