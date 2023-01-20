import { Server } from "@overnightjs/core";
import bodyParser from 'body-parser';
import cors from "cors";
import { CarrosController } from "./controllers/carrosController";

export class AppServer extends Server {
    
    constructor() {
        super();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(cors());

        const carrosController = new CarrosController();
        super.addControllers([carrosController]);
    }

    public start(port: number) {
        this.app.listen(port, () => console.log('Servidor criado'))
    }
}