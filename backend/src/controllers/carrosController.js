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

module.exports = { getCars }