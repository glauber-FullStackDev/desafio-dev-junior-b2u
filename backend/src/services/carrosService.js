const { carros, donos } = require("../models");
const { statusCode } = require('../utils/statusCode');

const getCars = async () => {
  const cars = await carros.findAll({
    include: [{
      model: donos,
      required: true,
    }],
    attributes: {
      exclude: ['donoId'],
    },
  });
  return cars;
}

const postCar = async (data) => {
  const validation = await carros.findOne({
    where:
    {
      nome: data.nome,
      marca: data.marca,
      anoFabricacao: data.anoFabricacao,
    }
  });
  if (validation) return statusCode.BAD_REQUEST;
  await carros.create(data)
  return statusCode.OK;
};

module.exports = { getCars, postCar }