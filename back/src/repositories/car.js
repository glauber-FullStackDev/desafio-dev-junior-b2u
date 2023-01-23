const Car = require('../models/car');

const CarRepository = {
  async getAll() {
    try {
      const Cars = await Car.findAll();
      return Cars;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async getById(id) {
    try {
      const car = await Car.findByPk(id);
      return car;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async create(CarData) {
    try {
      const car = await Car.create(CarData);
      return car;
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  },
  async update(id, CarData) {
    try {
      await Car.update(CarData, { where: { id } });
      const updatedCar = await Car.findByPk(id);
      return updatedCar;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  async delete(id) {
    try {
      const deletedCar = await Car.findByPk(id);
      await Car.destroy({ where: { id } });
      return deletedCar;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};

module.exports = CarRepository;
