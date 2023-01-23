const { statusCode } = require('../utils/statusCode');
const donosService = require('../services/donosService');

const { OK, CREATED } = statusCode;

const getOwners = async (_req, res, _next) => {
  const donos = await donosService.getOwners();
  if (!donos) throw new Error('Ocorreu um erro inesperado');
  return res.status(OK).json(donos);
};

const postOwners = async (req, res, _next) => {
  const dono = await donosService.postOwners(req.body);
  if (dono === CREATED) return res.status(CREATED).json({ message: 'Dono cadastrado com sucesso!'});
  throw new Error('Ocorreu um erro inesperado');
}

module.exports = { getOwners, postOwners }