const { statusCode } = require('../utils/statusCode');
const donosService = require('../services/donosService');

const { OK } = statusCode;

const getOwners = async (_req, res, _next) => {
  const donos = await donosService.getOwners();
  if (!donos) throw new Error('Ocorreu um erro inesperado');
  return res.status(OK).json(donos);
};

module.exports = { getOwners }