const { carros, donos } = require("../models");
const { statusCode } = require('../utils/statusCode');

const getCars = async () => {
  const cars = await carros.findAll({
    include: [{
      model: donos,
      required: true,
      attributes: {
        exclude: ['id', 'email', 'telefone'],
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

const editCar = async (data) => {
  await carros.update(data, { where: { id: data.id } })
  return statusCode.OK;
}

module.exports = { getCars, postCar, editCar }