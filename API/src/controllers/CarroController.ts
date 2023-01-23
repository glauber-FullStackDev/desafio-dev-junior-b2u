import { Request, Response } from 'express'
import { Carro } from '../models/Carro'
import { Op } from 'sequelize'

module.exports = {
    async listar(req: Request, res: Response) {
        try {
            const carros: Carro = await Carro.findAll({
                include: { association: 'dono_carro' }
            })
            
            // pegar buffer do banco e transformar em base64 novamente
            for(let i = 0; i < carros.length; i++) {
                carros[i].foto_carro = carros[i].foto_carro ? carros[i].foto_carro.toString('base64') : carros[i].foto_carro   
            }

            return res.json(carros)

        } catch (error) {
            console.log(error)
        }
        
    },
    
    async criar(req: Request, res: Response) {
        try {
            const { 
                nome,
                marca,
                ano_fabricacao,
                descricao,
                dono_carro_id,
                foto_carro
            } = req.body

            const carro: Carro = await Carro.create({ 
                nome,
                marca,
                ano_fabricacao,
                descricao,
                dono_carro_id,
                foto_carro: Buffer.from(foto_carro, "base64"),
                ativo: "true"
            })

            return res.json(carro)

        } catch (error) {
            console.log(error)
        }
       
    },

    async editar(req: Request, res: Response) {
        try {
            const { id } = req.params
            const {                 
                nome,
                marca,
                ano_fabricacao,
                descricao,
                dono_carro_id,
                foto_carro,
                ativo
            } = req.body
    
            let carro: Carro = await Carro.findByPk(id);
    
            if(!carro) {
                return res.status(400).json({ error: 'carro não encontrado' })
            }
            
            carro.nome = nome ? nome : carro.nome
            carro.marca = marca ? marca : carro.marca
            carro.ano_fabricacao = ano_fabricacao ? ano_fabricacao : carro.ano_fabricacao
            carro.descricao = descricao ? descricao : carro.descricao

            // CONFIFURAR EDIÇÃO DE IMAGEM PARA BASE64
            carro.foto_carro = foto_carro ? Buffer.from(foto_carro, "base64") : carro.foto_carro

            carro.dono_carro_id = dono_carro_id ? dono_carro_id : carro.dono_carro_id
            carro.ativo = ativo ? ativo : carro.ativo         /* <- para que o valor seja editado, é necessário passar o false/true como string  */
            
            await carro.save()
    
            return res.json(carro)
            
        } catch (error) {
            console.log(error)
        }
    },

    async deletar(req: Request, res: Response) {
        try {
            const { id } = req.params

            if(!await Carro.findByPk(id)) {
                return res.status(400).json({ error: 'Carro não encontrado' })
            }

            await Carro.destroy({ where: { id } })
            
            return res.status(204).end()
            
        } catch (error) {
            console.log(error)
        }
    },

    async buscar(req: Request, res: Response) {
        try {
            const { nome } = req.params

            const carros = await Carro.findAll({ 
                where: { 
                    nome: {
                        [Op.like]: `${nome}%`
                    } 
                }})

            if(!carros) {
                return res.status(400).json({ error: 'Carro não encontrado' })
            }

            for(let i = 0; i < carros.length; i++) {
                carros[i].foto_carro = carros[i].foto_carro ? carros[i].foto_carro.toString('base64') : carros[i].foto_carro   
            }

            return res.json(carros)

        } catch (error) {
            console.log(error)
        }
    },

    async buscarUm(req: Request, res: Response) {
        try {
            const { id } = req.params

            const carro: Carro = await Carro.findByPk(id, {
                include: { association: 'dono_carro' }
            });

            // pegar buffer do banco e transformar em base64 novamente
            carro.foto_carro = carro.foto_carro ? carro.foto_carro.toString('base64') : carro.foto_carro;

            if(!carro) {
                return res.status(400).json({ error: 'Carro não encontrado' });
            }

            return res.json(carro);
            
        } catch (error) {
            console.log(error);
        }
    },

    async buscarPorDono(req: Request, res: Response) {
        const { dono_carro_id } = req.body

        const carros: Carro = await Carro.findAll({ where: { dono_carro_id } })

        if(!carros) {
            return res.status(400).json({ error: 'Carro não encontrado' })
        }

        return res.json(carros)
    }
}