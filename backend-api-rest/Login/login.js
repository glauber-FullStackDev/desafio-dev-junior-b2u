const db = require('../conexao/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const senhaToken = require('../senha')


const login = async(req,res) =>{
    const {email,senha} = req.body
        try {
          const verificarEmail = await db('donocarro').where({email}).first()
          if(!verificarEmail){
            return res.status(400).json({mensagem:'E-mail ou senha incorretos'})
          }
          const senhaBcrypt = await bcrypt.compare(senha,verificarEmail.senha)
          if(!senhaBcrypt){
            return res.status(404).json({mensagem:'E-mail ou senha incorretos'})
          }
          const token = jwt.sign({id:verificarEmail.id},senhaToken,{expiresIn:'2d'})
          const {senha:_,...dados} = verificarEmail
          res.status(200).json({
            users:dados,
            token:token
          })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    
}

module.exports ={
    login
}