import Dados from "../models/Dados.js";

export default {

    async read(req, res) {
        const listaDados = await Dados.find();
        return res.json(listaDados)
    },
    
    async create(req, res) {
        const { carro, marca, fabricacao, descricao, dono, email, telefone } = req.body;

        const criarDados = await Dados.create({
            carro,
            marca,
            fabricacao,
            descricao,
            dono,
            email,
            telefone,
        });
        
        return res.json(criarDados);
    },

    async delete(req, res) {
        const { id } = req.params;
        const deletarDados = await Dados.findOneAndDelete({ _id: id });
        
        if(deletarDados) {
            return res.json('Cadastro do ' + deletarDados.nome + ' foi excluído com sucesso!');
        }

        return res.status(401).json({ error: 'Não foi encontrado o registro para deletar!' });
    },

    async update(req, res) {
        const { id } = req.params;
        const { carro, marca, fabricacao, descricao, dono, email, telefone } = req.body;        
        const data = { carro, marca, fabricacao, descricao, dono, email, telefone };
        const user = await Dados.findByIdAndUpdate({ _id: id }, data, {new: true});
        res.json(user);
    }

}