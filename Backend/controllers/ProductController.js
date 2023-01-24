import { Connect } from '../database/PostgresDB.js'

export const getCars = async (_, res) => {
    try {
        const response = await Connect.query('SELECT * FROM Carros2 ORDER BY id ASC');
        return res.status(200).json(response.rows);
    } catch (err) {
        console.log(err);
        return res.status(500).json('Internal Server error');
    }
};

export const addCars = async (req, res) => {
    try {
        const { nome_carro, marca, ano_fabrica, description, proprietario, email, fone } = req.body;
        const response =
            await Connect.query('INSERT INTO Carros2 (nome_carro, marca, ano_fabrica, description, proprietario, email, fone) VALUES ($1, $2, $3, $4, $5, $6, $7)',
                [nome_carro, marca, ano_fabrica, description, proprietario, email, fone]);
        return res.status(200).json('Cadastrado com sucesso!');

    } catch (err) {
        console.log(err);
        return res.status(500).json('Internal Server error');
    }
};

export const updateCar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { nome_carro, marca, ano_fabrica, description, proprietario, email, fone } = req.body;

        await Connect.query('UPDATE Carros2 SET nome_carro = $1, marca = $2, ano_fabrica = $3, description = $4, proprietario = $5, email = $6, fone =$7 WHERE id = $8',
            [nome_carro, marca, ano_fabrica, description, proprietario, email, fone, id]);
        return res.status(200).json('Atualizado com sucesso!');

    } catch (err) {
        console.log(err);
        return res.status(500).json('Internal Server error');
    }

};

export const getUserById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await Connect.query('SELECT * FROM Carros2 WHERE id = $1', [id]);
        return res.json(response.rows);

    } catch (err) {
        console.log(err);
        return res.status(500).json('Internal Server error');
    }
};

export const deleteCar = async (req, res) => {
    const id = parseInt(req.params.id);
    await Connect.query('DELETE FROM Carros2 where id = $1', [
        id
    ]);
    res.json(`Carro com id: ${id} foi deletado com sucesso!`);
};