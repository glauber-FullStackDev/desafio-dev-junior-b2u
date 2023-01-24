const { carros, donos } = require("../models");
const { statusCode } = require('../utils/statusCode');

const getCars = async () => {
  const cars = await carros.findAll({
    include: [{
      model: donos,
      required: true,
      attributes: {
        exclude: ['id'],
      }
    }],
    attributes: {
      exclude: ['donoId'],
    },
  });
  return cars;
}

const postCar = async (data) => {
  await carros.create(data)
  return statusCode.CREATED;
};

const editCar = async (data, id) => {
  const validation = await carros.findByPk(id);
  if (!validation) return statusCode.NOT_FOUND;
  await carros.update(data, { where: { id } });
  return statusCode.OK;
}

const getCarById = async (id) => {
  const car = await carros.findByPk(id, {
    include: [{
      model: donos,
      required: true,
      attributes: { exclude: ['id'] }
    }],
    attributes: {
      exclude: ['donoId'],
    },
  });
  if (!car) return statusCode.NOT_FOUND;
  return car;
}

const deleteCar = async (id) => {
  await carros.destroy({ where: { id } })
  return statusCode.OK;
};

module.exports = { getCars, postCar, editCar, getCarById, deleteCar }