'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('carros', {
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

      marca: {
        type: Sequelize.STRING,
        allowNUll: false,
      },

      ano_fabricacao: {
        type: Sequelize.INTEGER,
        allowNUll: false
      },

      descricao: {
        type: Sequelize.STRING,
        allowNUll: false
      },
      
      dono_carro_id: {
        type: Sequelize.INTEGER,
        allowNUll: false,
        references: { model: 'dono_carros', key: 'id' },
        onUpdate: 'CASCADE',   
        onDelete: 'SET NULL'
      },

      foto_carro: {
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
    await queryInterface.dropTable('carros');
  }
};
