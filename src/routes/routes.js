const express = require("express");
const routes = express.Router();
const db = require("../database/db");
const { v4: uuidv4 } = require("uuid");

routes.get("/car", (request, response) => {
  return response.status(200).json(db);
});

routes.post("/car", (request, response) => {
  const { name_car, brand, year_of_manufacture, description, name,email,  phone } = request.body;

  const objCar = {
    id_car: uuidv4(),
    name_car,
    brand,
    year_of_manufacture,
    description,
    name,
    email,
    phone,
    created_at: new Date(),
  };

  db.push(objCar);

  return response.status(201).json(objCar);
});

routes.patch("/car/:id_car", (request, response) => {
  const { id_car } = request.params;
  const { name_car, brand, year_of_manufacture, description, name, email, phone } = request.body;
  const carIndex = db.findIndex((car) => car.id_car === id_car);

  if (carIndex < 0) {
    return response.status(400).json({ error: "Car not found" });
  }

  const objCar = {
    id_car,
    name_car,
    brand,
    year_of_manufacture,
    description,
    name,
    email, 
    phone,
    updated: new Date(),
  };

  db[carIndex] = objCar;

  return response.json(objCar);
});

routes.delete("/car/:id_car", (request, response) => {
  const { id_car } = request.params;
 //const { name_car, brand, year_of_manufacture, description, name,email,  phone } = request.body;

  const carIndex = db.findIndex((car) => car.id_car === id_car);

  if (carIndex < 0) {
    return response.status(400).json({ error: "Car not found" });
  }

  db.splice(carIndex, 1);

  return response.status(204).json([]);
});

module.exports = routes;
