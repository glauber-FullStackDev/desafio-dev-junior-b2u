const { Carro } = require("../models");

const getCars = async () => {
  const cars = await Carro.findAll();
  return cars;
}

module.exports = { getCars }