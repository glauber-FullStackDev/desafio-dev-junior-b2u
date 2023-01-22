const carsService = require('../services/carrosService');
const { statusCode } = require('../utils/statusCode');

const {
  BAD_REQUEST,
  CREATED,
  NOT_FOUND,
  OK,
  INTERNAL_SERVER_ERROR,
} = statusCode;

const getCars = async (_req, res, _next) => {
  const cars = await carsService.getCars();
  return res.status(OK).json(cars);
}

const postCar = async (req, res, _next) => {
  const createCar = await carsService.postCar(req.body);
  if (createCar === BAD_REQUEST) return res.status(BAD_REQUEST).json({ message: 'Esse carro já existe' })
  if (createCar === OK) return res.status(OK).json({ message: 'Carro criado com sucesso!' })
}

module.exports = { getCars, postCar }