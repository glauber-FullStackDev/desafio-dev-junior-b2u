import Car from "../models/Car";
import { z } from "zod";

interface ICarController {
  create(request: any, reply: any): Promise<void>;
  getAll(request: any, reply: any): Promise<void>;
  get(request: any, reply: any): Promise<void>;
  update(request: any, reply: any): Promise<void>;
  delete(request: any, reply: any): Promise<void>;
  deleteAll(request: any, reply: any): Promise<void>;
}

export default class CarController implements ICarController {
  async create(request: any, reply: any) {
    const createCarBody = z.object({
      name: z.string(),
      brand: z.string(),
      year: z.number(),
      owner: z.object({
        name: z.string(),
        email: z.string(),
        tel: z.string(),
      }),
    });
    const { name, brand, year, owner } = createCarBody.parse(request.body);

    try {
      const car = await Car.create({
        name,
        brand,
        year,
        owner,
      });
      reply.status(201).send(car);
    } catch (error: any) {
      reply.status(500).send({ error: error.message });
    }
  }

  async getAll(request: any, reply: any) {
    try {
      const cars = await Car.find();
      reply.status(200).send(cars);
    } catch (error: any) {
      reply.status(500).send({ error: error.message });
    }
  }

  async get(request: any, reply: any) {
    const getCarParams = z.object({
      id: z.string(),
    });
    const { id } = getCarParams.parse(request.params);

    try {
      const car = await Car.findById(id);
      if (!car) {
        reply.status(404).send({ error: "Car not found" });
      }
      reply.status(200).send(car);
    } catch (error: any) {
      reply.status(500).send({ error: error.message });
    }
  }

  async update(request: any, reply: any) {
    const updateCarParams = z.object({
      id: z.string(),
    });
    const { id } = updateCarParams.parse(request.params);

    const updateCarBody = z.object({
      name: z.string(),
      brand: z.string(),
      year: z.number(),
      owner: z.object({
        name: z.string(),
        email: z.string(),
        tel: z.string(),
      }),
    });
    const { name, brand, year, owner } = updateCarBody.parse(request.body);

    try {
      const car = await Car.findByIdAndUpdate(
        id,
        {
          name,
          brand,
          year,
          owner,
        },
        { new: true }
      );
      if (!car) {
        reply.status(404).send({ error: "Car not found" });
      }
      reply.status(200).send(car);
    } catch (error: any) {
      reply.status(500).send({ error: error.message });
    }
  }

  async delete(request: any, reply: any) {
    const deleteCarParams = z.object({
      id: z.string(),
    });
    const { id } = deleteCarParams.parse(request.params);

    try {
      const car = await Car.findByIdAndDelete(id);
      if (!car) {
        reply.status(404).send({ error: "Car not found" });
      }
      reply.status(200).send(car);
    } catch (error: any) {
      reply.status(500).send({ error: error.message });
    }
  }

  async deleteAll(request: any, reply: any) {
    try {
      const cars = await Car.deleteMany({});
      reply.status(200).send(cars);
    } catch (error: any) {
      reply.status(500).send({ error: error.message });
    }
  }
}
