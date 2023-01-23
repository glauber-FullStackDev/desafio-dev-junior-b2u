const { donos } = require("../models");
const { statusCode } = require('../utils/statusCode');

const getOwners = async () => {
  const owners = await donos.findAll();
  return owners;
};

const postOwners = async (body) => {
  await donos.create(body);
  return statusCode.CREATED;
}

module.exports = { getOwners, postOwners }