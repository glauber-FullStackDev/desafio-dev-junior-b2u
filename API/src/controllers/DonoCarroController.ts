import { Request, Response } from 'express'
import { DonoCarro } from '../models/DonoCarro'
import { Op } from 'sequelize'

type DonoCarroType = {
    nome: string
    email: string
    telefone: string
    foto_perfil: Buffer
}

module.exports = {
    async listar(req: Request, res: Response) {
        try {
            const donosCarro: DonoCarro[] = await DonoCarro.findAll()
            
            // pegar buffer do banco e transformar em base64 novamente
            for(let i = 0; i < donosCarro.length; i++) {
                donosCarro[i].foto_perfil = donosCarro[i].foto_perfil ? donosCarro[i].foto_perfil.toString('base64') : donosCarro[i].foto_perfil;
            }

            return res.json(donosCarro)

        } catch (error) {
            console.log(error)
        }
    },
    
    async criar(req: Request, res: Response) {
        try {
            const { 
                nome,
                email,
                telefone,
                // foto_perfil

            } = req.body

            const donoCarro: DonoCarroType = await DonoCarro.create({ 
                nome,
                email,
                telefone,
                // foto_perfil: Buffer.from(foto_perfil, "base64"),
                ativo: "true"
            })

            return res.json(donoCarro)

        } catch (error) {
            console.log(error)
        }
       
    },

    async editar(req: Request, res: Response) {
        try {
            const { id } = req.params
            const {                 
                nome,
                email,
                telefone,
                // foto_perfil,
                ativo

            } = req.body
    
            let donoCarro: DonoCarro = await DonoCarro.findByPk(id);
    
            if(!donoCarro) {
                return res.status(400).json({ error: 'Dono do carro não encontrado' })
            }
            
            donoCarro.nome = nome ? nome : donoCarro.nome
            donoCarro.email = email ? email : donoCarro.email
            donoCarro.telefone = telefone ? telefone : donoCarro.telefone
            
            // CONFIFURAR EDIÇÃO DE IMAGEM PARA BASE64
            // donoCarro.foto_perfil = foto_perfil ? Buffer.from(foto_perfil, "base64") : donoCarro.foto_perfil

            donoCarro.ativo = ativo ? ativo : donoCarro.ativo         /* <- para que o valor seja editado, é necessário passar o false/true como string  */

            await donoCarro.save()
    
            return res.json(donoCarro)
            
        } catch (error) {
            console.log(error)
        }
    },

    async deletar(req: Request, res: Response) {
        try {
            const { id } = req.params

            if(!await DonoCarro.findByPk(id)) {
                return res.status(400).json({ error: 'Dono do carro não encontrado' })
            }

            await DonoCarro.destroy({ where: { id } })
            
            return res.status(204).end()
            
        } catch (error) {
            console.log(error)
        }
    },

    async buscar(req: Request, res: Response) {
        try {
            const { nome } = req.body

            const donosCarro = await DonoCarro.findAll({ 
                where: { 
                    nome: {
                        [Op.like]: `${nome}%`
                    } 
                }})

            if(!donosCarro) {
                return res.status(400).json({ error: 'Dono do carro não encontrado' })
            }

            return res.json(donosCarro)

        } catch (error) {
            console.log(error)
        }
    },

    async buscarUm(req: Request, res: Response) {
        try {
            const { id } = req.params

            const donoCarro: DonoCarro = await DonoCarro.findByPk(id);

            // pegar buffer do banco e transformar em base64 novamente
            donoCarro.foto_perfil = donoCarro.foto_perfil ? donoCarro.foto_perfil.toString('base64') : donoCarro.foto_perfil   

            if(!donoCarro) {
                return res.status(400).json({ error: 'Dono do carro não encontrado' })
            }

            return res.json(donoCarro)
            
        } catch (error) {
            console.log(error)
        }
    }
}