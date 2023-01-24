'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('carros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      imagem: {
        allowNull: true,
        type: Sequelize.BLOB,
      },
      marca: {
        allowNull: false,
        type: Sequelize.STRING
      },
      anoFabricacao: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'ano_fabricacao',
      },
      descricao: {
        allowNull: false,
        type: Sequelize.STRING
      },
      donoId: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
        field: 'dono_id',
        references: {
          model: 'donos',
          key: 'id',
        }
      }
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('carros');
  }
};
