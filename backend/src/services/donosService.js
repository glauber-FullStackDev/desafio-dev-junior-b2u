const { donos } = require("../models");

const getOwners = async () => {
  const owners = await donos.findAll();
  return owners;
};

module.exports = { getOwners }