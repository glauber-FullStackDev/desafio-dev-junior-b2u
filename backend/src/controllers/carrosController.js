const carsService = require('../services/carrosService');
const { statusCode } = require('../utils/statusCode');

const {
  CREATED,
  NOT_FOUND,
  OK,
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

const getCarById = async (req, res, _next) => {
  const { id } = req.params;
  const carById = await carsService.getCarById(id)
  if (carById === NOT_FOUND) return res.status(NOT_FOUND).json({ message: 'Não há um carro com esse id!' })
  return res.status(OK).json(carById);
}

const deleteCar = async (req, res, _next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  const { id } = req.params;
  const deletedCar = await carsService.deleteCar(id);
  if (deletedCar === OK) return res.status(OK).json({ message: 'Carro deletado com sucesso!' });
  throw new Error('Não foi possível deletar o carro!');
}

module.exports = { getCars, postCar, editCar, getCarById, deleteCar }