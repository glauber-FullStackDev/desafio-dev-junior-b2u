'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Carros', [
      {
        id: 1,
        nome: 'Fusca',
        marca: 'Volksvagen',
        ano_fabricacao: '2010',
        descricao: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.`,
        dono_id: 2,
      },
      {
        id: 2,
        nome: 'Argo',
        marca: 'Fiat',
        ano_fabricacao: '2020',
        descricao: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.`,
        dono_id: 1,
      },
      {
        id: 3,
        nome: 'Voyage',
        marca: 'Volksvagen',
        ano_fabricacao: '2021',
        descricao: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.`,
        dono_id: 4,
      },
      {
        id: 4,
        nome: 'Compass',
        marca: 'Jeep',
        ano_fabricacao: '1996',
        descricao: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.`,
        dono_id: 2,
      },
    ], {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Carros', null, {});
  }
};
