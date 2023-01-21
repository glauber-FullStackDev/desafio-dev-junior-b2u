const express = require("express");


const Routes = express.Router();
const { PrismaClient } = require("@prisma/client");
const { response } = require("express");

const prisma = new PrismaClient();

// C
Routes.post("/registration", async (request, response) => {
  const { name, email, telephone, car, brand, manufacture, description } = request.body;
  const registration = await prisma.registration.create({
    data: {
      name,
      email,
      telephone,

      car,
      brand,
      manufacture,
      description
      

  }
  })

  return response.status(201).json(registration);
});
// R
Routes.get("/registration", async (request, response) => {
  const registration = await prisma.registration.findMany();
  return response.status(200).json(registration);
});
// U

Routes.put("/registration", async (request, response) => {
  const { name, id, status, email, telephone, car, brand, manufacture, description } = request.body;

  if (!id) {
    return response.status(400).json("Id is mandatory");
  }

  const todoAlreadyExist = await prisma.registration.findUnique({ where: { id } });

  if (!todoAlreadyExist) {
    return response.status(404).json("Todo not exist");
  }

  const registration = await prisma.registration.update({
    where: {
      id,
    },
    data: {
      name,
      status,
      email,
      telephone,
      brand,
      car,
      description,
      manufacture
    },
  });

  return response.status(200).json(registration);
});
// D
Routes.delete("/registration/:id", async (request, response) => {
  const { id } = request.params;

  const intId = parseInt(id);

  if (!intId) {
    return response.status(400).json("Id is mandatory");
  }

  const todoAlreadyExist = await prisma.registration.findUnique({
    where: { id: intId },
  });

  if (!todoAlreadyExist) {
    return response.status(404).json("Todo not exist");
  }

  await prisma.registration.delete({ where: { id: intId } });

  return response.status(200).send();
});

module.exports = Routes;
