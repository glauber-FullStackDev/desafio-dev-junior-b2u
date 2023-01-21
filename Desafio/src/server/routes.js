import express from "express";
import DadosController from "./controllers/DadosController.js";

const routes = express.Router();

routes.get('/', DadosController.read);
routes.post('/', DadosController.create);
routes.delete('/:id', DadosController.delete);
routes.put('/dados/:id', DadosController.update);

export default routes;