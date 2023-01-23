'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('dono_carros', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNUll: false
      },

      nome: {
        type: Sequelize.STRING,
        allowNUll: false,
      },

      email: {
        type: Sequelize.STRING,
        allowNUll: false,
      },

      telefone: {
        type: Sequelize.STRING,
        allowNUll: false
      },

      foto_perfil: {
        type: Sequelize.BLOB('long'),
        allowNUll: true
      },

      ativo: {
        type: Sequelize.BOOLEAN,
        allowNUll: true
      },

      created_at: {
        type: Sequelize.DATE,
        allowNUll: false
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNUll: false
      }
      
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('dono_carros');
  }
};
