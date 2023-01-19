import { Server } from "@overnightjs/core";
import bodyParser from 'body-parser';
import cors from "cors";

export class AppServer extends Server {
    
    constructor() {
        super();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.app.use(cors());
    }

    public start(port: number) {
        this.app.listen(port, () => console.log('Servidor criado'))
    }
}