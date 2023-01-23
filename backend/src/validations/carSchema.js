const joi = require('joi');

const carSchema = joi.object({
    nome: joi.string().required().messages({
        'any.required': 'O campo NOME é obrigatório.',
        'string.empty': 'O campo NOME é obrigatório.' 
    }),
    marca: joi.string().required().messages({
        'any.required': 'O campo MARCA é obrigatório.',
        'string.empty': 'O campo MARCA é obrigatório.' 
    }),
    ano_fabricacao: joi.number().positive().required().messages({
        'any.required': 'O campo ANO_FABRICACAO é obrigatório.',
        'number.positive': 'O campo ANO_FABRICACAO precisa ser positivo.',
        'number.base': 'O campo ANO_FABRICACAO precisa ser um número inteiro.'
    }),
    descricao: joi.string(),
    nome_dono: joi.string().required().messages({
        'any.required': 'O campo NOME_DONO é obrigatório.',
        'string.empty': 'O campo NOME_DONO é obrigatório.'
    }),
    email_dono: joi.string().email().required().messages({
        'any.required': 'O campo EMAIL_DONO é obrigatório.',
        'string.empty': 'O campo EMAIL_DONO é obrigatório.',
        'string.email': 'O campo EMAIL_DONO precisa ter um formato válido.'
    }),
    telefone_dono: joi.string().required().messages({
        'any.required': 'O campo TELEFONE_DONO é obrigatório.',
        'string.empty': 'O campo TELEFONE_DONO é obrigatório.'
    })
});

module.exports = carSchema;