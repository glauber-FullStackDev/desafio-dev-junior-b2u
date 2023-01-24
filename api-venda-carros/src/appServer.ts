import { Server } from "@overnightjs/core";
import bodyParser from 'body-parser';
import cors from "cors";
import swaggerUI from 'swagger-ui-express';
import swaggerDocs from './swagger.json'
import { CarrosController } from "./controllers/carrosController";

export class AppServer extends Server {
    
    constructor() {
        super();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(cors());
        this.app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

        const carrosController = new CarrosController();
        super.addControllers([carrosController]);
    }

    public start(port: number) {
        this.app.listen(port, () => console.log('Servidor criado'))
    }
}