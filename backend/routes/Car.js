import  express  from "express";
import { Owners } from './Owner.js'
const Router = express.Router();

const Cars = [
    {
        id: 52,
        nome: 'Sedan',
        marca: 'Sedan',
        idDono: 42,
        ano: '2004',
        desc: 'Vermelho'

    },

    {
        id: 42,
        nome: 'Honda',
        marca: '4x4',
        idDono: 67,
        ano: '2002',
        desc: 'aZUL'

    }
]

Router.get('/list', (req, res) => {
    res.json({Cars});
})

Router.get('/details/:id', (req, res) => {
    const Id = req.params.id;
    const CarDetails = Cars.find(obj => {return obj.id == Id});
    const OwnerDetails = Owners.find(obj => {return obj.id == CarDetails.idDono});
    res.json({CarDetails, OwnerDetails});
})

Router.post('/create', (req, res) => {
    const Id = Math.floor(Math.random() * 100)
    const { nome, marca, ano, desc, ownerId } = req.body
    const Obj =  {
        id: Id,
        nome: nome,
        marca: marca,
        idDono: ownerId,
        ano: ano,
        desc: desc

    }
    Cars.push(Obj)
    JSON.stringify(Cars)
    res.json({Cars});
})

Router.get('/remove/:id', (req, res) => {
    const Id = req.params.id;
    const CheckExist = Cars.findIndex((obj) => obj.id == Id);

    if (CheckExist > -1) {
        Cars.splice(CheckExist, 1);
    }
  
    res.json({Cars});
   
})

Router.post('/edit', (req, res) => {
    const {id, nome, marca, ano, desc, ownerId} = req.body
    const FindIndex = Cars.findIndex((obj => obj.id == id));
    Cars[FindIndex].nome = nome;
    Cars[FindIndex].marca = marca;
    Cars[FindIndex].idDono = ownerId;
    Cars[FindIndex].ano = ano;
    Cars[FindIndex].desc = desc;

    res.json({Cars});
})

export default Router;