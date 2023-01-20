import { FastifyInstance } from "fastify";
import CarController from "./controllers/CarController";

const Car = new CarController();

export async function appRoutes(app: FastifyInstance) {
  app.get("/cars", Car.getAll);
  app.get("/cars/:id", Car.get);
  app.post("/cars", Car.create);
  app.put("/cars/:id", Car.update);
  app.delete("/cars/:id", Car.delete);
  app.delete("/cars", Car.deleteAll);
}
