const { donos } = require("../models");
const { statusCode } = require('../utils/statusCode');

const getOwners = async () => {
  const owners = await donos.findAll();
  return owners;
};

const postOwners = async (body) => {
  const owner = await donos.create(body);
  return { status: statusCode.CREATED, id: owner.id };
}

module.exports = { getOwners, postOwners }