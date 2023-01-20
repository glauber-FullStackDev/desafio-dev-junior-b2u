
import { Router } from 'express';
import { v4 as uuidv4 } from "uuid"


import { Customer } from "../models/customer"

export const routes = Router();


const customers: Customer[] = [];

routes.get("/fetchAll", (request, response) => {
  return response.status(200).json(customers);
});

routes.post("/createCar", (request, response) => {
  const { name_car, brand, year_of_manufacture, description, name, email, phone } = request.body;

  const newCustomer: Customer = {
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

  customers.push(newCustomer);

  return response.status(201).json(newCustomer);
});

routes.put("/changeCar/:id_car", (request, response) => {
  const { id_car } = request.params;
  const { name_car, brand, year_of_manufacture, description, name, email, phone } = request.body;
  const carIndex = customers.findIndex((car) => car.id_car === id_car);

  if (carIndex < 0) {
    return response.status(400).json({ error: "Car not found" });
  }

  const newCustomer: Customer = {
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

  customers[carIndex] = newCustomer;

  return response.json(newCustomer);
});

routes.delete("/deleteCar/:id_car", (request, response) => {
  const { id_car } = request.params;

  const carIndex = customers.findIndex((car) => car.id_car === id_car);

  if (carIndex < 0) {
    return response.status(400).json({ error: "Car not found" });
  }

  customers.splice(carIndex, 1);

  return response.status(204).json([]);
});

