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
  if (createCar === CREATED) return res.status(CREATED).json({ message: 'Carro criado com sucesso!' })
  throw new Error('Não foi possível criar o carro.')
}

const editCar = async (req, res, _next) => {
  const updateCar = await carsService.editCar(req.body);
  if (updateCar === OK) return res.status(OK).json({ message: 'Carro alterado com sucesso!' })
  throw new Error('Não foi possível editar o carro.')
}

module.exports = { getCars, postCar, editCar }