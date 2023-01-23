const repository = require('../repositories/car');

class CarController {
  async get(_req, res, _next) {
    try {
      const cars = await repository.getAll();
      res.status(200).send(cars);
    } catch (e) {
      res.status(400).send(e);
    }
  }

  async getById(req, res, _next) {
    try {
      const car = await repository.getById(req.params.id);
      res.status(200).send(car);
    } catch (e) {
      console.log(e);
      res.status(400).send(e);
    }
  }

  async post(req, res, _next) {
    try {
      const car = await repository.create(req.body);
      res.status(201).send(car);
    } catch (e) {
      res.status(400).send(e);
    }
  }

  async put(req, res, _next) {
    try {
      await repository.update(req.params.id, req.body);
      res.status(200).send({ message: 'Car updated successfully.' });
    } catch (e) {
      res.status(400).send(e);
    }
  }

  async delete(req, res, _next) {
    try {
      await repository.delete(req.params.id);
      res.status(200).send({ message: 'Car deleted successfully.' });
    } catch (e) {
      res.status(400).send(e);
    }
  }
}

module.exports = new CarController();
