const { statusCode } = require('../utils/statusCode');
const donosService = require('../services/donosService');

const { OK, CREATED } = statusCode;

const getOwners = async (_req, res, _next) => {
  const donos = await donosService.getOwners();
  if (!donos) throw new Error('Ocorreu um erro inesperado');
  return res.status(OK).json(donos);
};

const postOwners = async (req, res, _next) => {
  const response = await donosService.postOwners(req.body);
  if (response.status === CREATED) return res.status(CREATED).json({ id: response.id });
  throw new Error('Ocorreu um erro inesperado');
}

module.exports = { getOwners, postOwners }