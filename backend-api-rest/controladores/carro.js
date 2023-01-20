const db = require('../conexao/db')

const salvarCarro  = async(req,res) =>{
    const {nome,marca,data_fabricacao,descricao} = req.body
    try {
        const salvar = await db('carro').insert({
            nome,
            marca,
            data_fabricacao,
            descricao
        }).returning("*")
        if(!salvar){
            return res.status(404).json({mensagem:"Parâmetros não encontrados"})
        }
        return res.status(201).json({mensagem:"Carro cadastrado com sucesso"})
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
const listarCarro = async(req,res) =>{
    try {
        const listar = await db('carro').select('nome','marca','descricao','data_fabricacao')
        res.status(200).json(listar)
    } catch (error) {
        return res.status(500).json(error.menssage)
    }
}
const atualizarCarro = async(req,res) =>{
    const {id} = req.params;
    const {nome,marca,data_fabricacao,descricao} = req.body

    try {
        const atualizar = await db('carro').where({id}).update({
            nome,
            marca,
            data_fabricacao,
            descricao
        }).returning("*")
        if(!atualizar){
            return res.status(404).json({mensagem:'Parâmetros não encontrados'})
        }
        return res.status(200).json({mensagem:'Carro atualizado com sucesso'})
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

const deletarCarro = async(req,res) =>{
    const {id} = req.params;
    try {
        const deletarCarro = await db('carro').where({id}).del()
        if(deletarCarro){
            return res.status(404).json({mensagem:'Carro possui dono'})
        }
        return res.status(200).json({mensagem:'Carro deletado com sucesso'})
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
module.exports = {
    salvarCarro,
    listarCarro,
    atualizarCarro,
    deletarCarro
}