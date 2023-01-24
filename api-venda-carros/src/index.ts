import { config as setup} from "./config/config";
import { AppServer } from "./appServer";
import mongoose from "mongoose";

mongoose.set('strictQuery', true);

const conexao = () => {
    mongoose
        .connect(setup.mongo.url)
        .then( () => console.log('Banco conectado'))
        .catch( error => {
            console.log(error);
            setTimeout(conexao, 5000);
        });
};

conexao();

const port = setup.server.port;

const server = new AppServer();
server.start(port);

server.app.get('/api/v1/inicio', (_, res) => res.status(200).send('<h2>Hello!</h2>'));