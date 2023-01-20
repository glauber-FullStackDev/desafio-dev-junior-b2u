const express = require("express");
const { v4: uuidv4 } = require("uuid");
const db = require("./db");

const app = express();
app.use(express.json());

const port = 3000;

app.get("/", (request, response) => {
  return response.status(200).json(db);
});

app.post("/car", (request, response) => {
  const { name, brand, year_of_manufacture, description } = request.body;

  const objCar = {
    id_car: uuidv4(),
    name,
    brand,
    year_of_manufacture,
    description,
    created_at: new Date(),
  };

  db.push(objCar);

  return response.status(201).json(objCar);
});

app.put("/car/:id_car", (request, response) => {
  const { id_car } = request.params;
  const { name, brand, year_of_manufacture, description } = request.body;
  const carIndex = db.findIndex((car) => car.id_car === id_car);

  if (carIndex < 0) {
    return response.status(400).json({ error: "Car not found" });
  }

  const objCar = {
    id_car,
    name,
    brand,
    year_of_manufacture,
    description,
    updated: new Date(),
  };

  db[carIndex] = objCar;

  return response.json(objCar);
});

app.delete("/car/:id_car", (request, response) => {
  const { id_car } = request.params;
  const { name, brand, year_of_manufacture, description } = request.body;
  const carIndex = db.findIndex((car) => car.id_car === id_car);

  if (carIndex < 0) {
    return response.status(400).json({ error: "Car not found" });
  }

  db.splice(carIndex, 1);

  return response.status(204).json([]);
});

app.listen(port, () => console.log("listening on port ", port));
