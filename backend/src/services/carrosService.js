const { carros, donos } = require("../models");

const getCars = async () => {
  const cars = await carros.findAll({
    include: [{
      model: donos,
      required: true,
    }],
    attributes: {
      exclude: ['donoId', 'DonoId']
    },
  });
  return cars;
}

module.exports = { getCars }