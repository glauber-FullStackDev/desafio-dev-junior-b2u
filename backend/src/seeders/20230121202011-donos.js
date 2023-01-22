'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('donos', [
      {
        id: 1,
        nome: 'John Doe',
        telefone: '(41)999857454',
        email: 'johndoe@teste.com',
      },
      {
        id: 2,
        nome: 'Jake Chien',
        telefone: '(41)99983-7067',
        email: 'jake_chien@outlook.com',
      },
      {
        id: 3,
        nome: 'Alice Sabatine',
        telefone: '(41)99985-7454',
        email: 'alice@teste.com',
      },
      {
        id: 4,
        nome: 'Camyla de Lima',
        telefone: '(21)99856-3841',
        email: 'camyla@teste.com',
      },
    ], {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('donos', null, {});

  }
};
