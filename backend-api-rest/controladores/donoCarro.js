const db = require('../conexao/db')
const bcrypt = require('bcrypt')

const salvar = async(req,res) =>{
    const {nome,email,telefone,carro_id,senha} = req.body
    try {
       const verificarEmail = await db('donocarro').where({email}).first()
       if(verificarEmail){
        return res.status(400).json({mensagem:'Email já cadastrado'})
       }
       const senhaCriptografada = await bcrypt.hash(senha,10)
       const salvarDono = await db('donocarro').insert({
        nome,
        email,
        telefone,
        carro_id,
        senha:senhaCriptografada
       }).returning("*")
       if(!salvarDono){
        return res.status(404).json({mensagem:'Parâmetros não encontrados'})
       }
       return res.status(201).json({mensagem:'Dono cadastrado com sucesso'})
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

const listarDono = async(req,res)=>{
    try {
        const listar = await db('donocarro').select('nome','email','telefone')
        res.status(200).json(listar)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
module.exports = {
    salvar,
    listarDono
}