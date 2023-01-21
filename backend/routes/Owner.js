import  express  from "express";
const Router = express.Router();

export const Owners = [
    {
        id: 67,
        nome: 'Leonardo',
        email: 'leo@gmail.com',
        telefone: '(13)3329-9610'

    },

    {
        id: 42,
        nome: 'Giovanna',
        email: 'Giovanna@gmail.com',
        telefone: '(13)4280-6273'

    }
]

Router.get('/list', (req, res) => {
    res.json({Owners});
})

Router.post('/create', (req, res) => {
    const Id = Math.floor(Math.random() * 100)
    const { nome, email, telefone } = req.body
    const Obj =  {
        id: Id,
        nome: nome,
        email: email,
        telefone: telefone
    }
    Owners.push(Obj)
    JSON.stringify(Owners)
    res.json({Owners});

    console.log(Owners)
})


Router.get('/details/:id', (req, res) => {
    const Id = req.params.id;
    const Details = Owners.find(obj => {return obj.id == Id});
    res.json({Details});
})

export default Router;